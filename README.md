## xyy-sdk 1.0.5

我方xyy-sdk使用

### 引入
```html
<!-- 判断微信浏览器，并引入微信的sdk -->
<script>
if (/MicroMessenger/i.test(navigator.userAgent))
  document.write('<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"><\/script>')
</script>
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.1 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>

<!-- 游戏iframe中引入了xyy-sdk -->
<iframe src="/game"></iframe>
```

### 使用
```js
// 1、后端先为sdk输出一堆属性
xyy.gameId = '' 
xyy.uid  = ''
xyy.time = ''
xyy.isFocus = '';
xyy.username = ''
xyy.uswx = ''
xyy.token = ''
xyy.gameInfo = ''


// 2、再注册游戏对接事件
xyy.registerEvent()

// 3、监听游戏方的回调
xyy.listenEventOn('userbehavior', function(data){
  console.log(data)
   /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    data_type: Number — 必须，上报类型，1(选择服务器)，2(创建角色)，3(进入游戏)、4(等级提升)、5(退出游戏)

    server_id: Number — 必须，区服id

    server_name: String — 必须，区服名

    user_id: Number — 必须，平台用户id

    game_id: Number — 不必须，游戏id

    role_id: Number — 不必须，角色id

    role_name: String — 不必须，角色名

    role_level: Number — 不必须，角色等级

    money: Number — 不必须，用户元宝数

    job: String — 不必须，职业
   }
  **/
})
xyy.listenEventOn('createRole', function(data){
  console.log(data)
   // 联运gameid不必须？
   /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    uid: Number — 平台用户id

    server: Number — 区服id
    
    role: String — 区服名
    
    roleId: Number — 区服id
    
    job: String — 职业
       
   }
   **/
})
xyy.listenEventOn('sendrole', function(data){
  console.log(data)
   /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    uid: Number — 平台用户id

    gid: Number — 游戏id
    
    sid: Number — 区服id
    
    roleid: Number — 角色id
   
   }
   **/

})
xyy.listenEventOn('sendchatlog', function(data){
  console.log(data)
  /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    serverid: Number — 区服id

    rolename: String — 角色名
    
    servername: String — 区服名
    
    channel: Number — 渠道id
    
    channelname: String — 渠道名
    
    ouid: Number — 
    
    content: String — 
    
    chattype: Number — 
    
    typename: Number — 
    
    platid: Number — 
    
    gameid: Number — 游戏id
    
    touserid: Number — 
    
    payamount: Number — 
    
    job: String — 职业
    
   }
   **/

})

xyy.listenEventOn('loginGameData', function(data){
  console.log(data)
  // 联运gid和rolename不是必须？
  /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    uid: Number — 平台用户id

    gid: Number — 游戏id
    
    sid: Number — 区服id
    
    roleid: Number — 角色id
    
    rolename: Number —角色名
    
    job: String — 职业
    
   }
   **/
})

xyy.listenEventOn('upgrade', function(data){
  console.log(data)
  /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    uid: Number — 平台用户id

    gid: Number — 游戏id
    
    sid: Number — 区服id
    
    roleid: Number — 角色id
    
    rolename: Number —角色名
    
    level: Number — 角色等级
    
    job: String — 职业
    
   }
   **/
})

xyy.listenEventOn('pay', function(data){
  console.log(data)
   /**
   # 此处 data 的值为 (同postMessage时传入的参数)
   {
    gid: Number — 游戏id

    uid: Number — 用户id
    
    appusername: String — 
    
    sid: String —  区服id
    
    openuid: Number — 
    
    porductid: Number — 职业
    
    resource: String —
    
    money: Number —
    
    app_order_id: Number —
    
    server_name: String —
    
    product_name: String —
    
    product_desc: String —
    
    job: String — 职业
    
   }
   **/
})

```

### xyy-sdk游戏对接事件逻辑
<img src="logic-of-sdk.jpg" width="699"/>
  

