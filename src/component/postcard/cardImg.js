import React from 'react';
import ReactDom from 'react-dom';

import './cardImg.less'

import WeixinApi from '../../lib/weixinApi'

var wx = require('weixin-js-sdk');

export default class CardImg extends React.Component{
	state={
		to:'孔明、张飞'
	}
	
	componentWillMount(){
//		WeixinApi.config();
//		wx.ready(function(){
//			console.log('微信ready');
//		    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
//		});
	}
	
	render(){
		return (
			<div id="container">
				<img onClick={this.chooseImg} id="imgMain" src='http://pic1.win4000.com/wallpaper/0/4fcebbff8f008.jpg' />
			</div>
		);
	}
	
	chooseImg(){
//		wx.chooseImage({
//		    count: 1, // 默认9
//		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//		    success: function (res) {
//		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//		    }
//		});
	}

}