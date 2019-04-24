// const express = require('express')
// const app = express()
// const http = require('http')
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)

// const bodyParser = require('body-parser')
// const formidable = require('formidable')

// const shell = require('shelljs')

// const port = 3333
// const maxFieldsSize = 1 * 1024 * 1024 //内存大小
// const maxFileSize = .3 * 1024 * 1024 //


// app.use('/uploads',express.static(__dirname + '/uploads/'))


// app.use( bodyParser.urlencoded({extended: true ,limit: '1mb'}) )


// console.log(`listen at ${port}`)
// server.listen(port)


// app.get('/apia',(request,response)=>{
// 	response.header('Access-Control-Allow-Origin','*')
// 	response.end(JSON.stringify({
// 			status: 1,
// 			message:'fetched /apia',
// 			data:{
					
// 			}
// 	}))
// })


// app.post('/apib',(request,response)=>{
// 	response.header('Access-Control-Allow-Origin','*')
// 	response.end(JSON.stringify({
// 			status: 1,
// 			message:'fetched /apib',
// 			data:{
					
// 			}
// 	}))
// })


// // app.post('/uploadFile2/:userid',(request,response)=>{
// // 	response.header('Access-Control-Allow-Origin', '*')
// // 	response.end(JSON.stringify({
// // 		status: 1,
// // 		message:'success',
// // 		data:{
// // 			userid:request.params.userid+'@@@@@',
// // 			'fileURL':'URL'
// // 		}
// // 	}))
// // })


// app.post('/uploadFile/:userid', (request,response)=>{

// 	response.header('Access-Control-Allow-Origin','*')
// 	response.header('Access-Control-Allow-Credentials','true')

// 	var form = new formidable.IncomingForm()

// 	var dir = !!process.platform.match(/^win/) ? '\\uploads\\' : '/uploads/'

// 	form.uploadDir = __dirname + dir
    
// 	form.keepExtensions = true
// 	form.maxFieldsSize = maxFieldsSize
// 	form.maxFileSize = maxFileSize
// 	form.multiples = false

// 	form.parse(request, (err, fields, files) =>{

// 		if(err){
// 			console.log('err:',err)
// 			response.end(JSON.stringify({
// 				status: -1,
// 				message:'err',
// 				data:{}
// 			}))
// 			return 
// 		}

// 		// console.log(files.file.size,form.maxFieldsSize)

// 		const [,file_name,file_ext] = files.file.path.match(/([^\/]+)\.(wav|mp3|ogg)/)
		
// 		const fileURL = 'http://' + 'localhost' + ':' + port + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

//     console.log( `fileURL:${fileURL}`)
// 		response.end(JSON.stringify({
// 			status: 1,
// 			message:'success',
// 			data:{
// 				userid:request.params.userid+'@@@@@',
// 				fileURL
// 			}
// 		}))


// 		console.log('io emit....')
// 		io.emit('server-client:uploadfile',{
// 			userid:request.params.userid,
// 			fileURL
// 		})

// 	})

// })


// // 20秒150kb

// // ffmpeg -i  uploads/upload_4bd5622758528ad8e3daf25c39042649.wav -acodec libmp3lame audio.mp3

// // pm2 start server.js
// // pm2 stop server.js
// // pm2 logs
// // pm2 list
// // pm2 restart all
// io.on("connection",function(socket){
// 		console.log("a user connected!!!!!!")

//     socket.on("disconnect",function(){
//         console.log("a user disconnect");
//         io.emit("server-client:disconnect",{
//             user_id : socket.name
//         });
//     });

		
// 		socket.on('client-server:uploadFile',(data)=>{
// 			// console.log('client-server:uploadFile:',data.userid,data.file)

// 			// var form = new formidable.IncomingForm()

// 			// var dir = !!process.platform.match(/^win/) ? '\\uploads\\' : '/uploads/'

// 			// form.uploadDir = __dirname + dir
				
// 			// form.keepExtensions = true
// 			// form.maxFieldsSize = maxFieldsSize
// 			// form.maxFileSize = maxFileSize
// 			// form.multiples = false

// 			// form.parse(new Buffer(data.file), (err, fields, files) =>{

// 			// 	if(err){
// 			// 		console.log('err:',err)
// 			// 		response.end(JSON.stringify({
// 			// 			status: -1,
// 			// 			message:'err',
// 			// 			data:{}
// 			// 		}))
// 			// 		return 
// 			// 	}

// 			// 	// console.log(files.file.size,form.maxFieldsSize)

// 			// 	const [,file_name,file_ext] = files.file.path.match(/([^\/]+)\.(wav|mp3|ogg)/)
				
// 			// 	const fileURL = 'http://' + 'localhost' + ':' + port + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

// 			// 	console.log( `fileURL:${fileURL}`)
			
// 			// 	io.emit('server-client:uploadfile',{
// 			// 		userid:data.userid,
// 			// 		fileURL
// 			// 	})

// 			// })

// 			// io.emit('server-client:uploadfile',{
// 			// 	userid:data.userid,
// 			// 	fileURL:'fileUrl:33333'
// 			// })
// 		})

//     socket.on("client-server:join",function(data){

// 				socket.name = data.userid

// 				//console.log('join:!!!!!',data.userid)

// 				// 超过2个客户端进入，服务端才能成功emit客户端？？？？
//         io.emit("server-client:join",{
//             msg : "join ok",
//             userid:data.userid
// 				})

// 				setInterval(()=>{
// 					io.emit('message233',`${socket.name}broadcast:message233!`)
// 				},1234)
// 		})
		

//     // socket.on("client-server:message",function(data){
//     //     io.emit("server-client:message",data);
//     // });

// });
// // // debugger




const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const port = 3333

const formidable = require('formidable')

const maxFieldsSize = 1 * 1024 * 1024 //内存大小

const maxFileSize = .3 * 1024 * 1024 //

app.use('/uploads',express.static(__dirname + '/uploads/'))

console.log(`listen at ${port}`)
server.listen(port)



app.post('/uploadFile/:gameid/:userid', (request,response)=>{

	response.header('Access-Control-Allow-Origin','*')
	response.header('Access-Control-Allow-Credentials','true')

	var form = new formidable.IncomingForm()

	var dir = !!process.platform.match(/^win/) ? '\\uploads\\' : '/uploads/'

	form.uploadDir = __dirname + dir
    
	form.keepExtensions = true
	form.maxFieldsSize = maxFieldsSize
	form.maxFileSize = maxFileSize
	form.multiples = false

	form.parse(request, (err, fields, files) =>{

		if(err){
			console.log('err:',err)
			response.end(JSON.stringify({
				status: -1,
				message:'err',
				data:{}
			}))
			return 
		}

		// console.log(files.file.size,form.maxFieldsSize)

		const [,file_name,file_ext] = files.file.path.match(/([^\/]+)\.(wav|mp3|ogg)/)
		
		const fileURL = 'http://' + 'localhost' + ':' + port + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

    console.log( `fileURL:${fileURL}`)
		response.end(JSON.stringify({
			status: 1,
			message:'success',
			data:{
				userid:request.params.userid+'@@@@@',
				fileURL,
				gameid:request.params.gameid
			}
		}))


		console.log('io emit....')
		io.emit('server-client:uploadfile',{
			userid:request.params.userid,
			fileURL,
			gameid:request.params.gameid
		})

	})

})


io.on("connection",function(socket){
		console.log("a user connected")
		setInterval(()=>{
			// console.log('message-ovo!!!!')
			io.emit('message-ovo','message-ovo!!!!!!!!')

		},3333)



    socket.on("disconnect",function(){
        console.log("a user disconnect!!!!!")
		})

})
// // debugger
