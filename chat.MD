rtc聊天室对接

 ```html
//引入xyy-sdk
 <script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk-1.5.2.js"></scritp>
 ```
 
 ```js
 //////////使用
let rtcroom = xyy.RTCRoom(`https://ws-hjqj.app.xy.com`,{gameid:'gameid'})

rtcroom.onuploadFile(data=&gt;{
	//{userid,fileURL,gameid,server_port}
	//fileURL mp3连接
	//userid 用户id
})
let user = rtcroom.join({userid:'userid',sid:'sid'})
user.startRecord() //开始录制
user.stopRecord() //结束录制
///////////
			
 ```
