### xyy-sdk语音聊天室对接
目前测试兼容到安卓6.0 +，ios不支持
#### 引入
 ```html
//分别引入xyy-sdk和xyy-sdk-h5record
  <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-1.5.4.js"></script>
  <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-h5record-1.0.7.js"></script>
 ```
 
 #### 使用
 ```js
 //////////使用 
//建立socket链接
let rtcroom = xyy.RTCRoom(`https://ws-hjqj.app.xy.com`,{
	gameid:'gameid' // gameid 游戏id
})

//监听所有玩家录音后生成的mp3链接
////////////////↓↓↓↓↓↓↓↓↓↓↓↓/////////////////
//在这里进行其他相关处理
rtcroom.onuploadFile(data=>{
	//{userid,fileURL,gameid}
	//fileURL mp3连接
	//userid 用户id
	//aa
	//bb
		
})
/////////////////////////////////////////////

///////////用户加入聊天///////////
//内部进行了语音聊天监控，所以其他相关参数也需要传递进去
let user = rtcroom.join({
	userid:'userid',  // 用户id
	serverid:'serverid',  //  区服id
	rolename:'rolename-a', // 角色名, string
	servername:'servername-a', // 服务器名称, string
	channel:'channel-a', // 渠道, string
	channelname:'channelname-a', // 渠道名称, string
	ouid:'ouid-a', // 用户xy平台uid, string
	chattype:'chattype-a', // 聊天类型, string
	typename: 'typename-a-', // 聊天类型名称, string
	platid:'platid-a', // 平台id, string
	gameid:'gameid-a', // 游戏id, string
	touserid:'', // 聊天发送给的uid, string
	
	
	//下方传递了其他需要的参数，参数名自定义
	//如：aaa,bbb（不要与上方的参数名重复）
	aa:'aa',
	bb:'bb'
	
})
user.startRecord() //开始录制，通常会询问浏览器开启录音权限
user.stopRecord() //结束录制，用户触发onuploadfile
//////////////////////////////
			
 ```
