xyy.listenEventOn('createRole', function(data){
  console.log(data)
   /**
   # 此处 data 的值为 
   {
    uid: Number — 平台用户id

    server: Number — 区服id
    
    role: String — 区服名
    
    roleId: Number — 区服id

    sname: String — 区服名

    level: Number — 角色等级

    job: String — 职业
  
   }
   **/
})
xyy.listenEventOn('sendrole', function(data){
  console.log(data)
   /**
   # 此处 data 的值为 
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
   # 此处 data 的值为 
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
  /**
   # 此处 data 的值为 
   {
    uid: Number — 平台用户id

    gid: Number — 游戏id
    
    sid: Number — 区服id
    
    roleid: Number — 角色id
    
    rolename: Number —角色名

    level:String — 角色等级
    
    job: String — 职业

   }
   **/
})

xyy.listenEventOn('upgrade', function(data){
  console.log(data)
  /**
   # 此处 data 的值为 
   {
    uid: Number — 平台用户id

    sid: Number — 区服id
    
    roleid: Number — 角色id
    
    rolename: Number —角色名
    
    level: Number — 角色等级
    
    job: String — 职业
    
   }
   **/
})

xyy.listenEventOn('pay', function(data){

   /**
   # 此处 data 的值为 
   {
    gid: Number — 游戏id

    uid: Number — 用户id
    
    appusername: String — 用户名
    
    sid: String —  区服id
    
    openuid: Number — 用户游戏内id
    
    porductid: Number — 用户购买道具id
    
    resource: String — 联系开发人员获取
    
    money: Number — 金额(单位元)
    
    app_order_id: Number — 订单id
    
    server_name: String — 区服名
    
    product_name: String — 商品名
    
    product_desc: String — 商品描述
    
    job: String — 职业
    
   }
   **/
})