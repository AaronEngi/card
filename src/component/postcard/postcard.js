import React from 'react';
import ReactDom from 'react-dom';

import './postcard.less'

export default class Postcard extends React.Component{
	state={
		to:'孔明、张飞',
		content:'生命无常，各奔天涯，独坐而嘤嘤。尤记绕柱而转，贴墙而遁,隔帘相扑。母上安好，勿忧，但缅过往。',
		sender:'曹操',
		address:'海角市天涯路1号'
	}
	
	render(){
		return (
			<div id="container">
				<div id="branding">

				<h2>森林邮局</h2>
				<ul>
				<li>松果办事处</li>
				<li>精品明信片</li>
				</ul>

				</div>
				<div id="border">
				</div>
				<div id="content">
				<ul>
				<li id="message">
				<h3>邮件内容</h3>
				<p>{this.state.to}:</p>
				<p>  {this.state.content}</p>
				<p>{this.state.sender}</p>


				</li> 
				<li id="sender">
					<h3>收件人地址</h3>
					<p>{this.state.address}</p><br />
					<p>   {this.state.sender}(寄)</p><br />
				</li> 
				</ul>
				</div> 


			</div>
		);
	}
}