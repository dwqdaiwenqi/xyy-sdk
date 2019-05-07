const express = require('express')

const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const FileStreamRotator = require('file-stream-rotator')
const Rsync = require('rsync')
const dateFormat = require('dateformat')

const yyyymmdd = dateFormat(Date.now(), "yyyymmdd")

const maxFileSize = .3 * 1024 * 1024 //

const logDirectory = path.join(__dirname, 'log')



const adapterRoomid = ({roomid}={})=>{
	let map_room = require('./rooms.json')

	let roomid_ = map_room[roomid]

	if(!roomid_) console.log(`不存在的roomid${roomid}`)
	console.log(`${roomid}>>>${roomid_}`)
	return roomid_
}


module.exports = (port=3003)=>{
	const app = express()
	const server = require('http').createServer(app)

	console.log(`port:${port}～～～`)
	// ensure log directory exists
	fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

	// https://172.20.1.41:8888/uploads/upload_1557129489889.mp3
	app.get('/uploads/*',(req,res)=>{
		// res.header('Access-')
		res.header("Access-Control-Allow-Origin", "*")
		res.sendFile(__dirname+req.path)
	})

	// create a rotating write stream
	var accessLogStream = FileStreamRotator.getStream({
		date_format: 'YYYYMMDD',
		filename: path.join(logDirectory, 'access-%DATE%.log'),
		frequency: 'daily',
		verbose: false
	})

	// setup the logger
	app.use(morgan('combined', {stream: accessLogStream}))


	server.listen(port,()=>{
		console.log(`listen at ${port}`)
	})

	const io = require('socket.io')(server)
	const redisAdapter = require('socket.io-redis')

	// io.adapter(redisAdapter({host:'localhost',port:6379, auth_pass:'123456'}))

	io.adapter(redisAdapter({host:redis_host,port:redis_port, auth_pass:redis_auth_pass}))

	io.on('connection',(socket)=>{

		//client->server:join
		socket.on('client->server:join',data=>{
			// echo globally (all clients) that a person has connected
			// socket.broadcast.emit('user joined', {
			// 	userid: data.userid
			// })
			socket.userid = data.userid
			
			let roomid_

			if(roomid_ = adapterRoomid({roomid:data.sid})){
				socket.roomid = roomid_
				socket.join(  socket.roomid  )

				io.to(socket.roomid).emit('server->client:join',{userid:data.userid,roomid:data.roomid_})

			}

		})


		// when the user disconnects.. perform this
		socket.on('disconnect', () => {
			if(typeof socket.roomid!='undefined'){
				io.to(socket.roomid).emit('server->client:disconnect',{userid:socket.userid})
			}
		})


		//socket
		socket.on('client->server:uploadfile',data=>{
			if(typeof socket.roomid == 'undefined'){

				return console.log('非法uploadfile！')

			}
			

			var { buffer,userid, gameid } = data

			//console.log(userid,gameid)

			if(buffer.length>maxFileSize){
				console.log(buffer.length,'> maxFileSize')
				return
			}
			//console.log('###',buffer.length) ///  kb

			const dir = !!process.platform.match(/^win/) ? '\\uploads\\' : '/uploads/'
			const file_ext = 'mp3'
			const file_name = `upload_${Date.now()}`


			fs.writeFile(__dirname + dir+  file_name+'.'+file_ext, buffer, err=>{
				if(err){
					console.log(err)
					return
				}


				// https://172.20.1.41:7878/19/nodejs-cluster-redis/#userid-a

				// const fileURL = '//172.20.1.41:7878' + '/xyy-sdk/uploads/' + file_name+'.'+file_ext
					
				// const fileURL =  '//172.20.1.41:8888/uploads/' + file_name+'.'+file_ext
				// 通过nginx反向代理后的8888端口上uploads文件地址

				// const fileURL =  '//localhost:8888/uploads/' + file_name+'.'+file_ext

				// var rsync = new Rsync()

				// console.log(rsync.port,'####')
				// // Build the command
				var rsync = new Rsync()
				.set('port','8733')
				.flags('az')
				.source('/uploads/' + file_name+'.'+file_ext)
				.destination(`172.26.2.238::www/static.xy.com/chat/${socket.roomid}/${yyyymmdd}/`)

			//	console.log('args:',rsync.args())

				// console.log('rsync execute ---')


				rsync.execute(function(error, code, cmd) {

					console.log('rsync execute!', error,code,cmd)
					if(error){
						console.log('err:',error)
						return
					}

					// ws-hjqj.app.xy.com

					console.log('io emit!!!!')
					// we're done
					io.to(socket.roomid).emit('server->client:uploadfile',{
						userid,
						// fileURL:`static.xyimg.net/chat/hjqj/${socket.roomid}/20190506/${file_name}.mp3`,
						fileURL:`static.xy.com/chat/hjqj/${socket.roomid}/${yyyymmdd}/${file_name}.mp3`,
						gameid,
						roomid:socket.roomid,
						server_port:port
					})
				})

				//  static.xy.com

				//console.log('fileUrl:',fileURL)
				// io.to(socket.roomid).emit('server->client:uploadfile',{
				// 	userid,
				// 	fileURL,
				// 	gameid,
				// 	roomid:socket.roomid,
				// 	server_port:port
				// })

			})

		})
		
	})

}
