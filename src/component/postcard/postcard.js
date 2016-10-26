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
				
				<h2>Union Postale Universelle</h2>
				<ul>
				<li>Cartolina Postale</li>
				<li>
				<h1>Carte Postale</h1>
				</li>				
				<li>Ta</li>
				<br />
				<li>Levelezo-lap</li>
				<li>Postcard</li>
				<li>Postkarte</li>
				<li>Brief</li>
				</ul>
				
				</div>
				<div id="border">
				</div>
				<div id="content">
				<ul>
				<li id="message">
				<h3>Partie réservée a la correspondance</h3>
				<p>{this.state.content}</p>
				<p>{this.state.sender}</p>
				
				
				</li> 
				<li id="sender">
				<h3>Adresse du destinataire</h3>
				<p><span className="capitalm">M</span>lle G. Simon</p><br/>
				<p>Rue de Simon 31</p><br/>
				<p>Arbestre</p><br/>
				<p id="phone">Phone</p>
				
				</li> 
				</ul>
			</div> 
			
			
			</div>
		);
	}
}