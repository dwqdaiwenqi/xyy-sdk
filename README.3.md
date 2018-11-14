## xyy-sdk 1.0.9

游戏方xyy-sdk使用

### 引入
```html
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.9 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>
```
### API

#### 支付调用方法：

#### loadPayBox(gid,uid,appusername,sid,openuid,porductid,money,resource=1378161,app_order_id)

    gid: 游戏id 骑战三国GID=16

    uid：登录后用户id，由登录传给游戏的用户id

    appusername：用户名

    sid：大区id

    openuid：用户游戏内id

    productid：用户购买道具id

    money：金额(单位元)

    resource：联系开发人员获取

    app_order_id：订单id

#### 创角成功调用

#### createRole(uid,server,role,roleId,sname,level)

    uid:平台用户id，

    server:区服id,

    role:角色名称,

    roleId:游戏角色id,

    sname:游戏区服名称,

    level:角色等级

#### 角色升级调用

#### upgrade(uid,server,role,roleId,sname,level)

      uid:平台用户id，

      server:区服id,

      role:角色名称,

      roleId:游戏角色id,

      sname:游戏区服名称,

      level:角色等级

#### 进服数据发送

#### gamelogin(uid,gid,sid,roleid,rolename)

    uid:平台用户id，

    gid 游戏id（骑战三国为16）

    sid:区服id

#### 微信分享进游戏后传过来角色信息，分享成功后会调用你方接口

#### sendrole (uid,gid,sid,roleid) 

    uid:平台用户id，

    gid 游戏id（骑战三国为16）

    sid:区服id

    roleid:游戏角色id,

#### 聊天发送

#### sendchatlog(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount,job)

    serverid: 区服id

    rolename: 角色名称

    servername: 游戏区服名称

    channel: 

    channelname

    ouid:

    content:

    chattype:

    typename:

    platid:平台id

    gameid:游戏id

    touserid:

    payamount:

    job:角色职业




