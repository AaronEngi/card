export default class StringUtil {

	static startWith(src, segment) {
		var reg = new RegExp("^" + segment);
		return reg.test(src);
	}

	static  endWith(src, segment) {
		var reg = new RegExp(segment + "$");
		return reg.test(src);
	}
	//鍙傛暟璇存槑锛歴tr琛ㄧず鍘熷瓧绗︿覆鍙橀噺锛宖lg琛ㄧず瑕佹彃鍏ョ殑瀛楃涓诧紝sn琛ㄧず瑕佹彃鍏ョ殑浣嶇疆
	static strInsert(src, segment, index) {
		if(src == undefined) {
			return src;
		}
		var before = src.substring(0, index);
		var after = src.substring(index);
		return before + segment + after;
	}

}