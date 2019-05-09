### xyy-sdk语音聊天室对接
目前测试兼容到安卓6.0 +，ios不支持
#### 引入
 ```html
//分别引入xyy-sdk和xyy-sdk-h5record
 <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-1.3.2.js"></script>
 <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-h5record-1.0.0.js"></script>
 ```
 
 #### 使用
 ```js
 //////////使用
 //gameid(游戏id)
 //userid(用户id)
 //sid(区服id)
 
//建立socket链接
let rtcroom = xyy.RTCRoom(`https://ws-hjqj.app.xy.com`,{gameid:'gameid'})

//监听所有玩家录音后生成的mp3链接
////////////////↓↓↓↓↓↓↓↓↓↓↓↓/////////////////
//在这里进行其他相关处理
rtcroom.onuploadFile(data=&gt;{
	//{userid,fileURL,gameid}
	//fileURL mp3连接
	//userid 用户id
		
})

//用户加入聊天，传入sid和userid
let user = rtcroom.join({userid:'userid',sid:'sid'})
user.startRecord() //开始录制，通常会询问浏览器开启录音权限
user.stopRecord() //结束录制，用户触发onuploadfile
///////////
			
 ```
