import StringUtil from './stringUtil'

const SCREEN_WITH = 750;

export default class ImgUrlUtil {
	//<reference path="./string.util.js" />

	static imgFullUrl(url, width, height) {
		if(url == undefined) {
			return url;
		}
		//TODO 鏍规嵁灞忓箷澶у皬浼樺寲锛岀洰鍓嶅彧鑰冭檻640
		if(StringUtil.startWith(url, 'https') || StringUtil.startWith(url, 'http') 
		|| StringUtil.startWith(url, '//')) {
			return url;
		}
		//鍥剧墖璐ㄩ噺
		var quality = 90;
		var condition;
		var result = url;
		if(!width || width <= 0) {
			width = SCREEN_WITH;
		}
		if(!height || height <= 0) {
			//楂樺害鏃犳晥
			condition = "/app/" + width;
		} else {
			condition = "/app/" + width + "_" + height + "_" + quality;
		}

		var last = url.lastIndexOf("/");
		if(last > 1) {
			//鎻掑叆鏉′欢
			result = StringUtil.strInsert(url, condition, last);
		}
		result = "https://img3.csmall.com/" + result;
		return result;
	}
}