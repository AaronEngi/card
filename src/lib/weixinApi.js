import $ from 'jquery';
import URL_JS_CONFIG from '../config/urlConfig'

var wx = require('weixin-js-sdk');

export default class WeixinApi {
	config(){
		let url = location.href;
		requestConfig(url);
	}

//私有方法

	requestConfig(url){
		//从后台获取签名
		let urlConfig = URL_JS_CONFIG + '?url=' + url;
		$.ajax({
			type:"get",
			url:urlConfig,
			success:function(response){
				console.log("code:" + response.errcode);
				configByData(response);
			}
		});
	}
	
	configByData(response){
		wx.config({
		    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		    appId: response.appId, // 必填，公众号的唯一标识
		    timestamp: response.timestamp, // 必填，生成签名的时间戳
		    nonceStr: response.nonceStr, // 必填，生成签名的随机串
		    signature: response.signature,// 必填，签名，见附录1
		    jsApiList: [
onMenuShareTimeline,
onMenuShareAppMessage,
onMenuShareQQ,
onMenuShareWeibo,
onMenuShareQZone,
startRecord,
stopRecord,
onVoiceRecordEnd,
playVoice,
pauseVoice,
stopVoice,
onVoicePlayEnd,
uploadVoice,
downloadVoice,
chooseImage,
previewImage,
uploadImage,
downloadImage,
translateVoice,
getNetworkType,
openLocation,
getLocation,
hideOptionMenu,
showOptionMenu,
hideMenuItems,
showMenuItems,
hideAllNonBaseMenuItem,
showAllNonBaseMenuItem,
closeWindow,
scanQRCode,
chooseWXPay,
openProductSpecificView,
addCard,
chooseCard,
openCard
		    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	}
}

//onMenuShareTimeline
//onMenuShareAppMessage
//onMenuShareQQ
//onMenuShareWeibo
//onMenuShareQZone
//startRecord
//stopRecord
//onVoiceRecordEnd
//playVoice
//pauseVoice
//stopVoice
//onVoicePlayEnd
//uploadVoice
//downloadVoice
//chooseImage
//previewImage
//uploadImage
//downloadImage
//translateVoice
//getNetworkType
//openLocation
//getLocation
//hideOptionMenu
//showOptionMenu
//hideMenuItems
//showMenuItems
//hideAllNonBaseMenuItem
//showAllNonBaseMenuItem
//closeWindow
//scanQRCode
//chooseWXPay
//openProductSpecificView
//addCard
//chooseCard
//openCard
