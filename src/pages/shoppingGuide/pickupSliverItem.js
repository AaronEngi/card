
"use strict";
import React from 'react';
import InvestPage from '../../component/investPage.js';
import './pickupSliverItem.less';
import SliverItem from './sliverItem.js';

import IconDown from '../purchaseHistory/images/price_down_arrow.png';
import IconUp from '../purchaseHistory/images/price_up_arrow.png';
import Arrow_down from '../purchaseHistory/images/arrow_down.png';




var pickupSliverItem = React.createClass({
	
	getInitialState: function() {
		return {
			imageState: false,
			items : [],
		};
	},

     componentDidMount: function() {

     	var items =  [{
     		  parchaseMethod:'按克重',  // 购买方式
     		  parchaseAmount:'12600元', // 买入金额
              parchasePrice:'3.27元/克', // 买入银价
              purchaseCharge:'￥13.12(0.32/克)', // 手续费
              purchaseDate:'2016-10-11', // 买入日期
              amountIncome:'￥19.21 (18天，3.13%)', // 租金收益
              itemWeight:'5000g'
              
            },{
            	  parchaseMethod:'按金额',   
	     		  parchaseAmount:'12600元',
	              parchasePrice:'3.27元/克',
	              purchaseCharge:'￥13.12(0.32/克)',
	              purchaseDate:'2016-10-11',
	              amountIncome:'￥14.21 (17天，3.13%)',
	              itemWeight:'3237g(余下288元)'
            }];

     	 this.setState({
     	 	items:items
     	 });
     },

	render: function() {

		var items = this.state.items;

		var sliverItemList = items.map(function (item, index) {
        return (
               <SliverItem parchaseMethod={item.parchaseMethod} parchaseAmount={item.parchaseAmount} 
                          parchasePrice={item.parchasePrice} purchaseCharge={item.purchaseCharge} 
                          amountIncome={item.amountIncome} purchaseDate={item.purchaseDate} itemWeight={item.itemWeight} />
               );
            });

		return (
			<InvestPage className='purchaseDemo' title='提实物' spacing>
				<div style={{marginBottom:'px'}}>
                   <div  className='purchaseDate' onClick={e=>this.setState({imageState:!this.state.imageState})}>
                    	购买日期
                    	<img style={{marginLeft:'5px',verticalAlign:'sub'}} src={this.state.imageState?IconUp:IconDown}/>
                   </div>
                   <div className='purchaseMethod'>
                   		购买方式
                   		<img  style={{marginLeft:'5px',verticalAlign:'middle'}} src={Arrow_down}/>
                   </div>
				</div>
				<div>
                  {sliverItemList}
				</div>
			</InvestPage>
		);
	}

});

module.exports = pickupSliverItem;