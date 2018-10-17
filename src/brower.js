
const u = navigator.userAgent;

export default {
  version:{
    mobile: (/AppleWebKit.*Mobile.*/i).test(u),
    //是否为移动终端
    ios: (/\(i[^;]+;( U;)? CPU.+Mac OS X/i).test(u),
    //ios终端
    android: (/Android/i).test(u) || (/Linux/i).test(u),
    //android终端或者uc浏览器
    windowsphone: (/Windows Phone/i).test(u),
    //Windows Phone
    iPhone: (/iPhone/i).test(u),
    //是否为iPhone或者QQHD浏览器
    iPad: (/iPad/i).test(u),
    //是否iPad
    webApp: !(/Safari/i).test(u),
    //是否web应该程序，没有头部与底部
    MicroMessenger: (/MicroMessenger/i).test(u),
    //是否为微信
    weibo: (/Weibo/i).test(u),
    //是否为微博
    uc: (/ucweb|UCBrowser/i).test(u),
    //是否为UC
    qq: (/MQQBrowser/i).test(u),
    //是否为QQ浏览器
    baidu: (/Baidu/i).test(u),//是否为百度浏览器

    weixin:/MicroMessenger/i.test(u)
  }
  ,language:(navigator.browserLanguage || navigator.language).toLowerCase()

}