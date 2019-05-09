### xyy-sdk语音聊天室对接

 ```html
//引入xyy-sdk
 <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-1.5.2.js"></scritp>
 ```
 
 ```js
 //////////使用
 //gameid(游戏id)
 //userid(用户id)
 //sid(区服id)
 
let rtcroom = xyy.RTCRoom(`https://ws-hjqj.app.xy.com`,{gameid:'gameid'})
//监听了所有玩家录音后生成的mp3链接


////////////////↓↓↓↓↓↓↓↓↓↓↓↓/////////////////
//在这里进行其他相关处理
rtcroom.onuploadFile(data=&gt;{
	//{userid,fileURL,gameid,server_port}
	//fileURL mp3连接
	//userid 用户id
		
})

//用户加入，传入sid和userid
let user = rtcroom.join({userid:'userid',sid:'sid'})
user.startRecord() //开始录制
user.stopRecord() //结束录制
///////////
			
 ```
