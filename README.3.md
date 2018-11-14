## xyy-sdk 1.0.9

游戏方xyy-sdk使用

### 引入
```html
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.9 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>
```
### API

支付调用方法：
loadPayBox(gid,uid,appusername,sid,openuid,porductid,money,resource=1378161,app_order_id)
gid: 游戏id 骑战三国GID=16

uid：登录后用户id，由登录传给游戏的用户id

appusername：用户名

sid：大区id

openuid：用户游戏内id

productid：用户购买道具id

money：金额(单位元)

resource：联系开发人员获取

app_order_id：订单id

创角成功调用
createRole(uid,server,role,roleId,sname,level)

角色升级调用
upgrade(uid,server,role,roleId,sname,level)

进服数据发送
gamelogin(uid,gid,sid,roleid,rolename)

微信分享进游戏后传过来角色信息，分享成功后会调用你方接口
sendrole (uid,gid,sid,roleid) 

聊天发送
sendchatlog(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount,job)






