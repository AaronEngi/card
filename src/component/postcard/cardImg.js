import React from 'react';
import ReactDom from 'react-dom';

import './cardImg.less'

export default class CardImg extends React.Component{
	state={
		to:'孔明、张飞',
		content:'生命无常，各奔天涯，独坐而嘤嘤。尤记绕柱而转，贴墙而遁,隔帘相扑。母上安好，勿忧，但缅过往。',
		sender:'曹操',
		address:'海角市天涯路1号'
	}
	
	render(){
		return (
			<div id="container">
				<img id="imgMain" src='http://pic1.win4000.com/wallpaper/0/4fcebbff8f008.jpg' />

			</div>
		);
	}
	
	chooseImg(){
		wx.chooseImage({
		    count: 1, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		    }
		});
	}
}