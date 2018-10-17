var sdk =  {};

sdk.gameId = 0;
sdk.token = null;
sdk.gameInfo = null;
sdk.uid = null;
sdk.time = null;
sdk.username = null;
sdk.isFocus = false;
sdk.uswx = false;
sdk.wxappId = ''


sdk.isWeixin = function() {
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger"
};
sdk.getURLQuery = function(url) {
    var query = {};
    if (url) {
        var search = url.split("?")[1];
        if (search) {
            var pairs = search.split("&");
            for (var i = 0; i < pairs.length; i++) {
                query[pairs[i].split("=")[0]] = unescape(pairs[i].split("=")[1])
            }
        }
    }
    return query
};
sdk.getURLVar = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    return r != null ? unescape(r[2]) : null
};
sdk.setURLVar = function(url, key, value) {
    if (url) {
        var urlList = url.split("#");
        var params = {};
        var query = urlList[0].split("?")[1];
        var result = urlList[0].split("?")[0] + "?";
        if (query) {
            query = query.split("&");
            for (var i in query) {
                var vars = query[i].split("=");
                params[vars[0]] = vars[1]
            }
        }
        if (value) {
            params[key] = value
        } else {
            params[key] = null;
            delete params[key]
        }
        var first = true;
        for (var i in params) {
            result += (first ? "" : "&") + i + "=" + (params[i] ? params[i] : "");
            first = false
        }
        return result + (urlList[1] ? "#" + urlList[1] : "")
    }
    return ""
};
sdk.cleanURLVar = function(url) {
    if (url) {
        return url.split("?")[0]
    }
    return ""
};


sdk.buildURL = function(url, args) {
    if (url) {
        var urlList = url.split("#");
        var params = {};
        var query = urlList[0].split("?")[1];
        var result = urlList[0].split("?")[0] + "?";
        if (query) {
            query = query.split("&");
            for (var i in query) {
                var vars = query[i].split("=");
                params[vars[0]] = vars[1]
            }
        }
        for (var i in args) {
            if (args[i]) {
                params[i] = args[i]
            }
        }
        var first = true;
        for (var i in params) {
            result += (first ? "" : "&") + i + "=" + (params[i] ? params[i] : "");
            first = false
        }
        return result + (urlList[1] ? "#" + urlList[1] : "")
    }
    return ""
};

sdk.dialog = function(txt, callback) { //错误提示
    var html = '<div id="dialogBox" class="dialog-box max_260">';
    html += '<div class="dialog">';
    html += '<div class="dialog_hd">提示信息</div>';
    html += '<div class="dialog_bd">' + txt + "</div>";
    html += '<div class="dialog_ft">';
    html += '<a href="javascript:;">确定</a>';
    html += "</div></div></div>";
    $("body").append(html);
    $(".dialog_ft a").click(function() {
        $("#dialogBox").remove();
        if (callback) {
            callback()
        }
    })
};

sdk.closePayBox = function() {
    $("#payBox").hide()
};

sdk.loadPayBox = function(gid,uid,appusername,sid,openuid,porductid,money,resource,app_order_id,server_name,product_name,product_desc) {

    var msg={};
    window.parent.postMessage({
        cmd:"pay",
        gid:gid,
        uid:uid,
        appusername:appusername,
        sid:sid,
        openuid:openuid,
        porductid:porductid,
        resource:resource,
        money:money,
        app_order_id:app_order_id || 1,
        server_name:server_name || '',
        product_name:product_name || '',
        product_desc:product_desc || ''
    },"*")
};

sdk.userbehavior = function(dataType,serverID,serverName,userId,roleID,roleName,roleLevel,moneyNum){
    var msg={};
    window.parent.postMessage({
        cmd:"userbehavior",
        dataType:dataType,   	 // 上报类型,1(选择服务器)，2(创建角色)，3(进入游戏)、4(等级提升)、5(退出游戏)
        serverID:serverID,    	 // 区服ID
        serverName:serverName, 		 // 区服名,
        userId:userId,      	 // 贪玩平台用户ID
        roleID:roleID,      	 // 角色ID,
        roleName:roleName,   		 // 角色名,
        roleLevel:roleLevel,    	 // 角色等级,
        moneyNum:moneyNum            //用户元宝数
    },"*")
}

sdk.createRole = function(uid,sid,role,roleId){
    var msg={};

    window.parent.postMessage({
        cmd:'createRole',
        uid:uid,
        server:sid,
        role:role,
        roleId:roleId
    },"*")
};

sdk.gamelogin = function(uid,gid,sid,roleid,rolename){
    var msg={};
    window.parent.postMessage({
        cmd:'loginGameData',
        uid:uid,
        gid:gid,
        sid:sid,
        roleid:roleid||'',
        rolename:rolename||''
    },"*")
};

sdk.sendchatlog = function(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount){
    var msg={};
    window.parent.postMessage({
        cmd:'sendchatlog',
        serverid:serverid,
        rolename:rolename,
        servername:servername,
        channel:channel,
        channelname:channelname,
        ouid:ouid,
        content:content,
        chattype:chattype,
        typename:typename,
        platid:platid,
        gameid:gameid,
        touserid:touserid,
        payamount:payamount
    },"*")
};
sdk.sendchats = function(serverid,rolename,servername,channel,channelname,ouid,content,chattype,typename,platid,gameid,touserid,payamount){
    $.getJSON('http://www.xy.com/h5/chatmonitor/sendchats?callback=?',{serverid:serverid,rolename:rolename,servername:servername,channel:channel,channelname:channelname,ouid:ouid,content:content,chattype:chattype,typename:typename,platid:platid,gameid:gameid,touserid:touserid,payamount:payamount},function(res){

    })
}

sdk.sendrole = function(uid,gid,sid,roleid){
    var msg={};
    window.parent.postMessage({
        cmd:'sendrole',
        uid:uid,
        gid:gid,
        sid:sid,
        roleid:roleid
    },"*")
};

//创角统计
sdk.createPlayer = function(uid,server,role,roleId){
    if( !uid || !server || !role ){
        return false;
    }
    $.ajax({
        'url': "/h5/game/createRole",
        'type': 'POST',
        'data': {uid: uid, server: server, role: role, gameid: sdk.gameId, roleId: roleId},
        'success': function (data) {},
        'error': function (data) {},
    });
};

//登录游戏统计
sdk.loginGameData = function(uid,gid,sid,roleid,rolename){
    if( !uid || !gid || !sid ){
        return false;
    }
    $.ajax({
        'url': "/h5/game/logingame",
        'type': 'GET',
        'data': {uid: uid, sid: sid, gid: sdk.gameId,roleid:roleid,rolename:rolename},
        'success': function (data) {},
        'error': function (data) {},
    });
};

sdk.upgrade = function(uid,sid,role,roleId,sname,level){
    var msg={};
    window.parent.postMessage({
        cmd:'upgrade',
        uid:uid,
        server:sid,
        role:role,
        roleId:roleId,
        sname:sname||'',
        level:level||''
    },"*")
}



//离开游戏弹框
sdk.leaveGame = function(){
    var ap = 1
    function lgame(){
        if(ap){
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                $("body").append('<div class="close"><div class="dialog">' +
                    '<a href="http://www.xy.com/h5platform/index.html" class="index" style="margin-left: 35%">进入首页</a>' +
                    '</div></div>');
            }else if(!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/)){
                $("body").append('<div class="close"><div class="dialog">' +
                    '<a href="javascript:;" class="leave">毅然退出</a><a href="http://www.xy.com/h5platform/index.html" class="index">进入首页</a>' +
                    '</div></div>');
            }
            if(sdk.gameInfo && sdk.gameInfo.allowuser_show == "1"){
                $('.close .dialog .index').attr('href','http://www.xy.com/miniapps/index.html?gameid='+sdk.gameId ).html('切换账号')
            }
            ap = 0;
        }else{
            $('.close').fadeIn();
        }
    }
    //设置cookie
    function setCookie(name,value)
    {
        var Days = 10;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    //读取cookie
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }
        else{
            return null;
        }
    }

    window.history.pushState({}, null, '#forward');
    if (window.history && window.history.pushState) {
        setTimeout(function() {
            $(window).on('popstate', function () {
                window.history.pushState({}, null, '#forward');

                //判断是否PC
                if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    lgame();
                    $('.close').on('click',function(e){
                        e.stopPropagation();
                        $(this).fadeOut();
                    });
                    $('.leave').on('click',function(e){
                        e.stopPropagation();
                        try {
                            JS.close();
                        } catch (e){

                        }
                    });
                    $('.dialog').on('click',function(e){
                        e.stopPropagation();
                    })
                    $(document).on('touchstart', function (e){
                        if(e.target.className==='dialog' || e.target.className==='leave'  || e.target.className==='index') return;
                        $('.close').hide();
                    });
                }

            });
        },500)

    }
};


sdk.loadPay = function(gid,uid,appusername,sid,openuid,porductid,resource,money,isWx,timestamp,Str,signature,wei,app_order_id){
    try{
        var pay_version = JS.getData('version');
    }catch (e){
        var pay_version = 0;
    }


    var payurl = "/h5/pay/?money="+money+"&uid="+uid+"&app_user_name="+encodeURIComponent(appusername)+"&resource_id="+resource+"&product_id="+porductid+"&openuid="+openuid+"&app_id="+sdk.gameId+"&sid="+sid+'&app_order_id='+app_order_id+'&version='+pay_version;
    if( isWx ) {
        var src = '/h5/pay/?from=weixin&money=' + money + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&resource_id=' + resource + '&product_id=' + porductid + '&openuid=' + openuid + '&app_id=' + sdk.gameId + '&sid=' + sid+'&app_order_id='+app_order_id+'&version='+pay_version;
        $.ajax({
            url: src,
            success: function (urls) {
                var urlarr = eval('(' + urls + ')');
                $.ajax({
                    url: urlarr['url'],
                    success: function (result) {
                        var jsons = eval('(' + result + ')');
                        var appId = jsons['extra_data']['appId'];
                        var timeStamp = jsons['extra_data']['timeStamp'];
                        var nonceStr = jsons['extra_data']['nonceStr'];
                        var pk = jsons['extra_data']['package'];
                        var signType = jsons['extra_data']['signType'];
                        var paySign = jsons['extra_data']['paySign'];
                        //
                        wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: sdk.wxappId, // 必填，公众号的唯一标识
                            timestamp: timestamp, // 必填，生成签名的时间戳
                            nonceStr: Str, // 必填，生成签名的随机串
                            signature: signature,// 必填，签名，见附录1
                            jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.ready(function () {
                            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                            wx.chooseWXPay({
                                "timestamp": timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                                "nonceStr": nonceStr, // 支付签名随机串，不长于 32 位
                                "package": pk, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                                "signType": signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                                "paySign": paySign, // 支付签名
                                complete: function (res) {
                                    // 支付成功后的回调函数
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                                        var url = '/h5/pay/paystatus?status=success&order_id=' + urlarr['order_id'] + '&wp_pid=' + urlarr['order_id'];
                                        $.getJSON(url, function (data) {
                                        });
                                    } else {
                                        var url = '/h5/pay/paystatus?status=fail&order_id=' + urlarr['order_id'] + '&wp_pid=' + urlarr['order_id'];
                                        $.getJSON(url, function (data) {
                                        });
                                    }
                                    closepay();
                                }
                            });
                        });
                    },
                    error: function (req, status, err) {
                    }
                });
            },
            error: function (req, status, err) {
            }
        });
    } else {
        window.frame_id = 'pay';
        $(".iframe_box").remove();
        $(".ios_pay").remove();
        if (!$(".iframe_box").length) {
            var html = '';
            html += '<div class="iframe_box" id="_iframe_box" style="position:relative;width:80%;height:6rem; margin:100px auto 0;background:#fff;border-radius: 20px;overflow: hidden;">';
            html += '<p class="pay_num" style="height: 1.5rem;line-height: 1.5rem;text-align: center;font-size: 0.4rem;color: #666;overflow: hidden;">请选择支付方式</p>';
            html += '<p class="pay_num" style="height: 1.5rem;line-height: 1.5rem;text-align: center;font-size: 0.468rem;color: #333;overflow: hidden;"><span style="font-size: 0.8rem;">￥'+money+'</span></p>';
            html += '<iframe class="iframe_box_iframe" style="width: 100%;height:56%; border:0;" src="/h5/pay/payshow?app_order_id='+app_order_id+'&gameid=' + sdk.gameId + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&sid=' + sid + '&openuid=' + openuid + '&product_id=' + porductid + '&resource_id=' + resource + '&money=' + money + '" id=' + frame_id + '>';
            html += '</iframe>';
            html += '<img src="https://static.xyimg.net/cn/static/h5/img/close2.png?154" class="cli_none" style="position:absolute;cursor:pointer; top:-8px;right:0px;">';
            html += '</div>';
            html += '<a class="ios_pay"  href="https://www.xy.com/h5/account/zhishow?app_order_id='+app_order_id+'&gameid=' + sdk.gameId + '&uid=' + uid + '&app_user_name=' + encodeURIComponent(appusername) + '&sid=' + sid + '&openuid=' + openuid + '&product_id=' + porductid + '&resource_id=' + resource + '&money=' + money + '&version=5' +' "></a>';
            $('body').append(html);
        }
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            $('.iframe_box,.ly_alert_box').remove();
            var Href = $('.ios_pay').attr('href');
            location.href = Href;
            // $('.ios_pay').trigger("click").css('display','block');
        }else if(/(Android)/i.test(navigator.userAgent)){
            $('.ios_pay').remove();
            $('.iframe_box').show();
        }



        if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))){
            $('.iframe_box').css({'width': '370px','height':'370px'});
        }
    }
    function closepay() {
        $('.iframe_box').remove();
    }
    $(document).on('click','.iframe_box .cli_none',function(){
        $(this).parent().remove();
        $('.iframe_box').hide();
        //$('iframe_box').remove();
    });
};

sdk.login = function(type,sid,uid,roleId){
    var msg={};
    window.parent.postMessage({
        cmd:'login',
        type:type,
        uid:uid,
        server:sid,
        roleId:roleId
    },"*")
};

sdk.loginGame = function(type,server,uid,roleId){
    if( !uid || !server || !type){
        return false;
    }
    $.ajax({
        'url': "/game/gameReg",
        'type': 'POST',
        'data': {uid: uid, server: server, type: type, gameid: sdk.gameId, roleId: roleId},
        'success': function (data) {},
        'error': function (data) {},
    });
};

/**
 *对父页面跳转
*
* @param {object} o
*/

sdk.reloadParent = function(o){
    if(typeof o !='object') return alert('为一个obj..');
    window.parent.postMessage({ chooseServerUrl:o.chooseServerUrl,fn_name:'reloadParent'  },'*');

}

export default sdk