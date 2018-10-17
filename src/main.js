import base from './base'
import Event from './event'
import Brower from './brower'

module.exports = Object.assign(base, {
  userbehavior({data_type, server_id, server_name, game_id, user_id, role_id, role_name, role_level, money, job}={}){
    window.parent.postMessage({
      cmd:'userbehavior'
      ,data_type, server_id, server_name, game_id, user_id, role_id, role_name, role_level, money, job
    }, '*')
  }
  ,listenEventOn(s, fn){

    this.ev.on(s , (data)=>{
      fn(data)
    })

  }
  ,registerEvent(events=[]){

    let Ex = Object.create({
      'userbehavior'(data, ev){
        ev.trigger('userbehavior',data)
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
  ,version : '1.0.4'
  ,ev: new Event()
  ,Brower

})



