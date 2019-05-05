import base from './base'
import Event from './event'
import Brower from './brower'
import h5Record from './h5record'


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
  ,...h5Record
})
