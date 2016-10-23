"use strict";

import React from 'react';
import { Link } from 'react-router'

import Carousel from '../../component/carousel/carousel';
import PriceSilver from '../priceLine/priceSilver';
import Entry from './entry';

import {
    Article
} from 'react-weui';

export default class TabIndex extends React.Component {
	state={
		banner: []
	}
	
	componentDidMount() {
		fetch("https://1.csmall.com/banner/index")
		.then(function(response){
			return response.json()
			})
		.then(data=>{
		  console.log(data);
		  this.setState({
		  	banner:data.data
		  });
		});
	}
	
	render() {
		let height = document.body.clientWidth/2;
		let images = '';
		if(this.state.banner.length == 0){
				images = <img style={{height:height}} src='\/\/img2.csmall.com\/tenant\/29\/webPublicity\/article\/image\/2016\/08\/20160801111658_43167.png'/>;
		}else{
				images = this.state.banner.map(	
						function(item, index){
							return (<img style={{height:height}} key={index} src={item.image}/>);
						}
				);
		}
		
		return(
			<div>
				<Link to={'/priceSilver'}>银价走势</Link>
				<Carousel style={{height:height}} click={this.clickCarousel}>
					{images}					
				</Carousel>
{//四宫格
}
				<div>
					<Entry onClick={this.clickBuy} img='' mainTitle='我要买' subTitle='辅助说明'/>
					<Entry onClick={this.clickGetCommodity} img='' mainTitle='提实物' subTitle='辅助说明'/>
					<Entry onClick={this.clickGetCash} img='' mainTitle='提现金' subTitle='辅助说明'/>
					<Entry onClick={this.clickSell} img='' mainTitle='要回购' subTitle='辅助说明'/>
				</div>
				<div>
					<Link to={'/personalInfo'}>验证个人信息</Link>
					<br/>
					<Link to={'/purchase'}>保克重</Link>
					<br/>
					<Link to={'/purchaseCash'}>保金额</Link>
					<br/>
					<Link to={'/pickupSliverItem'}>提实物</Link>
				</div>

			</div>	
		);
	}
	
	clickCarousel(index){
		alert('lala:' + index);
	}
	
	clickBuy(){
		alert('我要买');
	}
	
	clickGetCommodity(){
		alert('提实物');
	}
	
	clickGetCash(){
		alert('提现金');
	}
	
	clickSell(){
		alert('要回购');
	}
	
}