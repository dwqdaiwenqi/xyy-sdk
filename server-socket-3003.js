

const express = require('express')
const app = express()

const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const FileStreamRotator = require('file-stream-rotator')

const server = require('http').createServer(app)

const port = 3003
const maxFileSize = .3 * 1024 * 1024 //

const logDirectory = path.join(__dirname, 'log')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

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
// io.adapter(redisAdapter({ host: 'localhost', port: 6379 })

// const pub = redis.createClient('localhost', 6379, { auth_pass: '123456' })
// const sub = redis.createClient('localhost', 6379, { auth_pass: '123456' })
// io.adapter(redisAdapter({ pubClient: pub, subClient: sub }))
io.adapter(redisAdapter({host:'localhost',port:6379, auth_pass:'123456'}))


var adapterRoomid = ({roomid}={})=>{
	let map_room = require('./rooms.json')

	let roomid_ = map_room[roomid]
	
	if(!roomid_) console.log(`不存在的roomid${roomid}`)
	console.log(`${roomid}>>>${roomid_}`)
	return roomid_
}

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
		// echo globally that this client has left
		// socket.broadcast.emit('user left', {
		// 	username: socket.username,
			
		// })
		if(typeof socket.roomid!='undefined'){
			io.to(socket.roomid).emit('server->client:disconnect',{userid:socket.userid})
		}
	})

	//socket
	socket.on('client->server:uploadfile',data=>{

		//console.log(data)
		// return 

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

			const fileURL = '//172.20.1.41:7878' + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

			//  static.xy.com

			//console.log('fileUrl:',fileURL)
			io.to(socket.roomid).emit('server->client:uploadfile',{
				userid,
				fileURL,
				gameid,
				roomid:socket.roomid,
				server_port:port
			})

		})

	})
	
})



