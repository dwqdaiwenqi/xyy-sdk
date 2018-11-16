## xyy-sdk v1.0.11

游戏方xyy-sdk使用文档

### 引入
```html
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.10 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>
```

### 使用
##### 先进行H5 登录游戏验证（登录链接由游戏方提供）

必传参数：

uid : 平台用户id

logintime: 登录时间

token : 验证字符串 md5(uid+'salsjOIUR94wjsdfjlw4j'+logintime)

##### 游戏中调用xyy-sdk的方法
```js

// 如：进服数据发送
xyy.gamelogin(uid, gid, sid)

// 角色升级调用
xyy.upgrade(uid, server, role, roleId)


```


### API

#### 支付调用方法

#### .loadPayBox(gid,uid,appusername,sid,openuid,porductid,money,resource,app_order_id,server_name='',product_name='',product_desc='',job='')

    gid: 游戏id

    uid：登录后用户id，由登录传给游戏的用户id

    appusername：用户名

    sid：大区id

    openuid：用户游戏内id

    productid：用户购买道具id

    money：金额(单位元)

    resource：联系开发人员获取

    app_order_id：订单id
    
    server_name:不必须，游戏区服名称
    
    product_name:不必须，商品名
    
    product_desc:不必须，商品描述
    
    job:不必须，游戏职业
    
    

#### 创角成功调用

#### .createRole(uid,server,role,roleId,sname='',level='',job='')

    uid:平台用户id

    server:区服id

    role:角色名称

    roleId:游戏角色id

    sname:不必须，游戏区服名称

    level:不必须，角色等级
    
    job:不必须，游戏职业

#### 角色升级调用

#### .upgrade(uid,server,role,roleId,sname='',level='',job='')

      uid:平台用户id

      server:区服id

      role:角色名称

      roleId:游戏角色id

      sname:不必须，游戏区服名称

      level:不必须，角色等级
      
      job:不必须，游戏职业

#### 进服数据发送

#### .gamelogin(uid,gid,sid,roleid='',rolename='',level='',job='')

    uid:平台用户id

    gid 游戏id（骑战三国为16）

    sid:区服id
    
    roleid:不必须，游戏角色id
    
    rolename:不必须，角色名称
    
    level:不必须，角色等级
    
    job:不必须，游戏职业

#### 微信分享进游戏后传过来角色信息，分享成功后会调用你方接口

#### .sendrole (uid,gid,sid,roleid) 

    uid:平台用户id

    gid 游戏id（骑战三国为16）

    sid:区服id

    roleid:游戏角色id

#### 聊天发送

#### .sendchatlog(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount,job)

    serverid: 服务器编号

    rolename: 角色名

    servername: 服务器名称

    channel: 渠道

    channelname: 渠道名称

    ouid:用户xy平台uid

    content:聊天内容

    chattype:聊天类型

    typename:聊天类型名称

    platid:平台id

    gameid:游戏id

    touserid:聊天发送给的uid

    payamount:玩家累计金额

    job:角色职业

