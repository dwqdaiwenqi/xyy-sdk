## xyy-sdk 1.0.5

游戏方xyy-sdk使用

### 引入
```html
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.1 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>
```
### API
#### createRole(uid, sid, role, roleId, sname, level, job)
    uid:Number — 必须，用户id

    sid:Number — 必须，区服id

    role:String — 必须，角色名

    roleId:Number — 必须，角色id
    
    sname:String — 不必须，区服名
    
    level:Number — 不必须，角色等级
    
    job:String — 不必须，职业

#### gamelogin(uid, gid, sid, roleid, rolename, level, job)
    uid:Number — 必须，用户id

    gid:Number — 必须，游戏id
    
    sid:Number — 必须，区服id

    roleid:Number — 不必须，角色id
    
    rolename:String — 不必须，角色名
    
    level:String — 不必须，角色等级

    job:String — 不必须，职业
    
#### upgrade(uid, sid, role, roleId, sname, level, job)
    uid:Number — 必须，用户id
    
    sid:Number — 必须，区服id
    
    role:String — 必须，角色名

    roleId:Number — 必须，角色id
    
    sname:String — 不必须，角色id

    level:String — 不必须，角色等级

    job:String — 不必须，职业
    
### sendchatlog(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount,job)

### pay(gid,uid,appusername,sid,openuid,porductid,money,resource,app_order_id,server_name,product_name,product_desc,job)

### sendrole()
