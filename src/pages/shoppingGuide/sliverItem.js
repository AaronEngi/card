"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

import {
    Cells,
    Cell,
	CellHeader,
    CellBody,
    CellFooter,
    CellsTitle,
}from 'react-weui'


var sliverItem = React.createClass({

     pickupSliverItem(){
       alert('实物提取');
     },

	render: function() {
		return (
			<div style={{marginBottom : '15px',border:'1px solid gray'}}>
				<Cell>
					<CellBody style={{fontSize:'15px'}}>提取克重</CellBody>
					<CellFooter>
							<div style={{color:'red',float:'right'}}>{this.props.itemWeight}</div>
					</CellFooter>
				</Cell>
				<Cell>
					<CellBody>
					   <CellsTitle>购买方式<div style={{textAlign:'right',float: 'right'}}>{this.props.parchaseMethod}</div></CellsTitle>
		               <CellsTitle>买入金额<div style={{textAlign:'right',float: 'right'}}>{this.props.parchaseAmount}</div></CellsTitle>
		               <CellsTitle>买入银价<div style={{textAlign:'right',float: 'right'}} >{this.props.parchasePrice}</div></CellsTitle>
		               <CellsTitle>手续费<div style={{textAlign:'right',float: 'right'}} >{this.props.purchaseCharge}</div></CellsTitle>
		               <CellsTitle>买入日期<div style={{textAlign:'right',float: 'right'}} >{this.props.purchaseDate}</div></CellsTitle>
		               <CellsTitle>租金收益<div style={{textAlign:'right',float: 'right',color:'red'}}>{this.props.amountIncome}</div></CellsTitle>
		             </CellBody>
				</Cell>
				     
				<Cell>
						<div onClick={this.pickupSliverItem} style={{color:'red',textAlign:'center',height:'30px',lineHeight:'30px',width:'100%'}}>
						     去提取
						</div>
				</Cell>
			</div>
		);
	}

});

module.exports = sliverItem;