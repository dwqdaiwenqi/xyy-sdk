import base from './base'
import Event from './event'
import Brower from './brower'

export default Object.assign(base, {
  userbehavior({data_type, server_id, server_name, game_id, user_id, role_id, role_name, role_level, money, job}={}){
    window.parent.postMessage({
      cmd:'userbehavior'
      ,data_type, server_id, server_name, game_id, user_id, role_id, role_name, role_level, money, job
    }, '*')

  }

  ,payiframeclose(){
    window.parent.postMessage({
      cmd:'payiframeclose'
    },'*')
  }
  ,gameloaded(gid,uid){
  
    window.parent.postMessage({
      cmd:'gameloaded'
      ,gid,uid
    },'*')
  }
  ,saveGameLoaded(gid,uid){
    $.getJSON('//www.xy.com/h5/game/gameloaded?callback=?',{gid,uid},res=>{

    })
  }

  ,RtcRoom(host,options){
    let mediaStream = null
    let recorder = null
    let socket = null

    options = Object.assign({},options,{
      uploadfile_url:`http://172.20.1.41:3333/uploadFile/${options.gameid}/${options.userid}`
    })
    
    let that = {
      startRecord(){
        //debugger
        // reusable getUserMedia
        var captureUserMedia = (success_callback)=>{
          var session = {
              audio: true
              //video: true
          }
          
          navigator.getUserMedia(session, success_callback, function(error) {
              alert('Unable to capture your camera. Please check console logs.')
              console.error(error);
          })
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
        function postFiles() {
            var blob = recorder.getBlob();
            ////////////////////
            //getting unique identifier for the file name
            // var fileName = 'fileName-23333' + '.wav'
            
            // var file = new File([blob], fileName, {
            // 		// type: 'video/webm'
            // 		type:'video/wav'
            // })
            var fileName = 'fileName-23333' + '.mp3'
            var file = new File([blob], fileName, {
              // type: 'video/webm'
              type:'video/mp3'
            })


            xhr(options.uploadfile_url, file, responseText=>{
              // console.log(responseText)
            })
          

            // socket.emit('client->server:uploadfile',{
            //   buffer:file,
            //   gameid:options.gameid,
            //   userid:options.userid
            // })
           
            
            if(mediaStream) mediaStream.stop();
            //////////////////////
        }
        
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
        recorder.stopRecording(postFiles)
      },
      onFuc:null,
      on(fns,fuc){
        this.onFuc = fuc
      },
      i(){
        ////socket.close()

        console.log(`connect host:${host}`)

        socket = io.connect(host)
        socket.on('message-ovo',data=>{
          console.log('###',data)
        })


        socket.emit('client->server:join',{ userid:options.userid })
        socket.on('server->client:uploadfile',data=>{
          if(data.gameid==options.gameid){
            this.onFuc(data)
          }
          // console.log(data,'########')
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
  // ,onLineService({"roleId":123,"roleName":"abc","roleLevel": 22, "serverId":1,"vipLevel":1,"serverName":"测试1服"}){
  ,onLineServicePanel({uid,gid,sid,rolename,roleid}={},$parent=document.body){
    let $d = document.createElement('div')
    $parent.appendChild($d)
    $d.id = 'online-service'
    
    $d.innerHTML = `
      <style>
        .online-service-back {
          position: absolute;
          top: 5px;
          right: 5px;
        }
        .online-service-back-button {
            background-color: #1d64c1;
            color: white;
            border-radius: 3px;
            border: none;
            padding: 5px;
        }
        #online-service {
            display: none;
            z-index: 2000;
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
        }
        #online-server{
          width:100%;
          height:100%;
        }
        .online-service-iframe{
          width:100%;
          height:100%;
        }
      </style>
      <div class="online-service-back">
        <button type="button" class="online-service-back-button">返回<br>游戏</button>
      </div>
      <div class="online-service-iframe">
        <iframe id="online-server" name="online-server" 
          src="//www.xy.com/kfsys?type=h5&uid=${uid}&gid=${gid}&sid=${sid}&rolename=${rolename}&roleid=${roleid}">
        </iframe>
      </div>
    `
    
    $d.style.display = 'block'
    $d.querySelector('.online-service-back').addEventListener('click',e=>{
      $d.style.display = 'none'
      $d.parentNode.removeChild($d)
    })

    var that = {
      $el:$d,
      setStyle(o){
        Object.keys(o).forEach(k=>{
          this.$el.style[k] = o[k]
        })
      }
    }
    that.setStyle({
      width:'100%',
      height:'100%'
    })

    return that
  }

  ,listenEventOn(s, fn){

    this.ev.on(s , (data)=>{
      fn(data)
    })
  }
  ,registerEvent(events=[]){

    console.log(`%c ✰ xyy-sdk ✰ v${__VERSION__} `,'color:aqua;')
    // console.log(2333)

    let Ex = Object.create({
      'userbehavior'(data, ev){
        ev.trigger('userbehavior',data)
      }
      ,'payiframeclose'(data,ev){
        ev.trigger('payiframeclose',data)
      }
      ,'gameloaded'(data,ev){
        ev.trigger('gameloaded',data)
      }
      ,'createRole'(data, ev){
        ev.trigger('createRole',data)
      }
      ,'sendrole'(data, ev){
        ev.trigger('sendrole',data)
      }
      ,'pay'(data, ev){
        ev.trigger('pay',data)
      }
      ,'sendchatlog'(data, ev){
        ev.trigger('sendchatlog',data)
      }
      ,'loginGameData'(data, ev){
        ev.trigger('loginGameData',data)
      }
      ,'upgrade'(data, ev){
        ev.trigger('upgrade',data)
      }   
    })

    var ev = this.ev

    var proxyEx = (target,event,param)=>{
      const {cmd} = event.data
      if(!cmd) return
      if(!target[cmd]) return console.warn(`缺少被注册对象:${cmd}`) 
      param.canRun(target, cmd)
    }


    addEventListener('message',(event)=>{
      proxyEx(Ex,event,{
        canRun(){
          Ex[event.data.cmd](event.data,ev)
        }
      })

    })
  }
  ,version : __VERSION__
  ,ev: new Event()
  ,Brower

})
