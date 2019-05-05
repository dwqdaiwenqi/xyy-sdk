
// const express = require('express')
// const app = express()
// const server = require('http').createServer(app)
// const io = require('socket.io')(server)
// const fs = require('fs')

// const port = 3333

// const formidable = require('formidable')

// const maxFieldsSize = 1 * 1024 * 1024 //内存大小

// const maxFileSize = .3 * 1024 * 1024 //

// app.use('/uploads',express.static(__dirname + '/uploads/'))

// server.listen(port,()=>{
// 	console.log(`listen at ${port}`)
// })

// //xhr
// app.post('/uploadFile/:gameid/:userid', (request,response)=>{

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
// 				fileURL,
// 				gameid:request.params.gameid
// 			}
// 		}))


// 		console.log('io emit....')
// 		io.emit('server->client:uploadfile',{
// 			userid:request.params.userid,
// 			fileURL,
// 			gameid:request.params.gameid
// 		})

// 	})

// })


// io.on('connection',(socket)=>{
// 		console.log("a user connected")
// 		// setInterval(()=>{
// 		// 	// console.log('message-ovo!!!!')
// 		// 	io.emit('message-ovo','message-ovo!!!!!!!!')

// 		// },3333)

//     socket.on('disconnect',()=>{
//       console.log("a user disconnect!!!!!")
// 		})
// 		socket.on('client->server:join',data=>{})

// 		//socket
// 		socket.on('client->server:uploadfile',data=>{
			
// 			var { buffer,userid, gameid } = data

// 			if(buffer.length>maxFileSize){
// 				console.log(buffer.length,'> maxFileSize')
// 				return
// 			}
// 			//console.log('###',buffer.length) ///  kb

// 			const dir = !!process.platform.match(/^win/) ? '\\uploads\\' : '/uploads/'
// 			const file_ext = 'mp3'
// 			const file_name = `upload_${Date.now()}`

// 			fs.writeFile(__dirname + dir+  file_name+'.'+file_ext, buffer, err=>{
// 				if(err){
// 					console.log(err)
// 					return
// 				}

// 				const fileURL = 'http://' + 'localhost' + ':' + port + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

// 				//console.log('fileUrl:',fileURL)
// 				io.emit('server->client:uploadfile',{
// 					userid,
// 					fileURL,
// 					gameid
// 				})
// 			})

// 			// console.log(__dirname+'/server.js')
// 			// fs.readFile(__dirname+'/server.js',data=>{
// 			// 	console.log(data)
// 			// })

// 		})

// })
// // debugger

const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

var privateKey  = fs.readFileSync(path.join(__dirname, './certificate/private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, './certificate/ca.cer'), 'utf8');

var credentials = {key: privateKey, cert: certificate};

const server = require('https').createServer(credentials,app)
const io = require('socket.io')(server)

const port = 3333

const formidable = require('formidable')

const maxFieldsSize = 1 * 1024 * 1024 //内存大小

const maxFileSize = .3 * 1024 * 1024 //

app.use('/uploads',express.static(__dirname + '/uploads/'))

server.listen(port,()=>{
	console.log(`listen at ${port}`)
})

//xhr
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
		
		const fileURL = 'https://172.20.1.41:7878' +  '/xyy-sdk/uploads/' + file_name+'.'+file_ext

    console.log( `fileURL:${fileURL}`)
		response.end(JSON.stringify({
			status: 1,
			message:'success',
			data:{
				userid:request.params.userid,
				fileURL,
				gameid:request.params.gameid
			}
		}))


		console.log('io emit....')
		io.emit('server->client:uploadfile',{
			userid:request.params.userid,
			fileURL,
			gameid:request.params.gameid
		})

	})

})


io.on('connection',(socket)=>{
		console.log("a user connected")
		// setInterval(()=>{
		// 	// console.log('message-ovo!!!!')
		// 	io.emit('message-ovo','message-ovo!!!!!!!!')

		// },3333)

    socket.on('disconnect',()=>{
      console.log("a user disconnect!!!!!")
		})
		socket.on('client->server:join',data=>{})

		//socket
		socket.on('client->server:uploadfile',data=>{
			
			var { buffer,userid, gameid } = data

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

				const fileURL = 'http://' + 'localhost' + ':' + port + '/xyy-sdk/uploads/' + file_name+'.'+file_ext

				//console.log('fileUrl:',fileURL)
				io.emit('server->client:uploadfile',{
					userid,
					fileURL,
					gameid
				})
			})

			// console.log(__dirname+'/server.js')
			// fs.readFile(__dirname+'/server.js',data=>{
			// 	console.log(data)
			// })

		})

})
// // debugger
