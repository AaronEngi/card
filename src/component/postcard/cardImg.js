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
}