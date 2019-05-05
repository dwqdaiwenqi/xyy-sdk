


import RecordRTC from './lib/RecordRTC'

import io from 'socket.io-client'

{
	let recorder
	let mediaStream
	var startRecord = ()=>{
			var captureUserMedia = (success_callback)=>{
					try{
							navigator.mediaDevices.getUserMedia({audio: true}).then(stream=>{
									success_callback(stream)
							}).catch(e=>{
									alert(`getUserMedia 1:${e}`)
							})
					}catch(e){
							alert(`getUserMedia 2:${e}`)
					}		
			}
			captureUserMedia((stream) =>{
					mediaStream = stream
															
					recorder = RecordRTC(stream, {
							type: 'audio',
							numberOfAudioChannels: 1
					})
					
					recorder.startRecording()
			})
	}

	var stopRecord = ({gameid,userid}={})=>{
			
			// XHR2/FormData
			var xhr = (url, data, callback)=>{
					var request = new XMLHttpRequest()
					request.onreadystatechange = ()=> {
							if (request.readyState == 4 && request.status == 200) {
									callback(request.responseText)
							}
					}                  
					
					request.open('POST', url)
					var formData = new FormData()
					formData.append('file', data)
					request.send(formData)
			}
			// debugger

			return new Promise(resolve=>{
					recorder.stopRecording(()=>{
							var blob = recorder.getBlob()
					
							var fileName = 'fileName-23333' + '.mp3'
							var file = new File([blob], fileName, {
									// type: 'video/webm'
									type:'video/mp3'
							})

							//__DEV__
							var part = __DEV__ === 'dev'?'https://172.20.1.41:3333/uploadFile':'https://172.20.1.41:3333/uploadFile'
						
							xhr(`${part}/${gameid}/${userid}`, file, responseText=>{
									console.log(responseText)
									let res
									try{
											res = JSON.parse(responseText)
											resolve(res)
									}catch(e){console.log(e)}
									
									// resolve(responseText)
							})
							if(mediaStream) mediaStream.stop()
					})
			})
			
	}
}

{
	var RTCRoom =(host='',options={})=>{
			
		let mediaStream = null
		let recorder = null
		let socket = null

		// options = Object.assign({},options,{	 })
		
		let that = {
			socket,
			onFuc:null,
			join({userid}={}){
				let user = {
					userid,
					startRecord(){
						var captureUserMedia = (success_callback)=>{
							var session = {
								audio: true
								//video: true
							}
							try{
								navigator.mediaDevices.getUserMedia(session).then(stream=>{
									success_callback(stream)
								}).catch(e=>{
									alert(`getUserMedia 1:${e}`)
								})
							}catch(e){
								alert(`getUserMedia 2:${e}`)
							}		
						}
						captureUserMedia((stream) =>{
							mediaStream = stream
												
							recorder = RecordRTC(stream, {
								type: 'audio',
								numberOfAudioChannels: 1
							})
							
							recorder.startRecording()
						})
					},
					stopRecord(){
						var postFiles = ()=>{
							// alert('postfiles!')
							var blob = recorder.getBlob()
							////////////////////
				
							var fileName = 'fileName-23333' + '.mp3'
							var file = new File([blob], fileName, {
								// type: 'video/webm'
								type:'video/mp3'
							})

							socket.emit('client->server:uploadfile',{
								buffer:file,
								gameid:options.gameid,
								userid:this.userid
							})
								
							if(mediaStream) mediaStream.stop()
						}
					
						recorder.stopRecording(postFiles)
					}
				}

				this.user = user
				// debugger
				socket.emit('client->server:join',{userid:this.user.userid})

				return user
			},
			onuploadFile(fuc){
				this.handle_onuploadFile = fuc
			},
			onuserJoin(fuc){
				this.handle_onuserJoin = fuc
			},
			onuserLeft(fuc){
				this.handle_onuserLeft = fuc
			},	
			i(){
				////socket.close()
			
				this.socket = socket = io.connect(host)
				
				socket.on('server->client:join',data=>{
					//console.log('join:',data.userid)
					this.handle_onuserJoin && this.handle_onuserJoin(data)
				})
				socket.on('server->client:disconnect',data=>{
					//console.log('disconnect:',data.userid)
					this.handle_onuserLeft && this.handle_onuserLeft(data)
				})
				socket.on('server->client:uploadfile',data=>{
					//console.log('#xxxx',data.gameid,options.gameid)
					if(data.gameid==options.gameid){
						this.handle_onuploadFile&&  this.handle_onuploadFile(data)
					}
					
				})

				socket.on('disconnect', () => {
						console.log('you have been disconnected')
				})

				socket.on('reconnect', () => {
						console.log('you have been reconnected')
						
				})

				socket.on('reconnect_error', () => {
						console.log('attempt to reconnect has failed')
				})


				return this
			}
		}
		return that.i()
	}
}
	
export default {
	startRecord,
	stopRecord,
	RTCRoom
}


