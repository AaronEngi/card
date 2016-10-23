

"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

import {Cells,
     Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Tab,
    TabBody,
    NavBar,
    NavBarItem,
    Article,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Button,CellsTitle
}from 'react-weui'
import './index.less';

export class OrderItem extends React.Component {

	render() {
		return (
			<Cells>
              <Cell>
              	<CellBody>
              	克重购买
              	</CellBody>
                <CellFooter>
                    <a style={{color:'red'}}>500g</a>
                </CellFooter>
              </Cell>
              <Cell>
               <CellBody>
               <CellsTitle>买入银价<div style={{textAlign:'right',float: 'right'}} value={this.props.orderID}>{this.props.silverprice}</div></CellsTitle>
               <CellsTitle>买入日期<div style={{textAlign:'right',float: 'right'}}>{this.props.purchaseDate}</div></CellsTitle>
               <CellsTitle>订单编号<div style={{textAlign:'right',float: 'right'}} ref="orderid" value={this.props.orderID}>{this.props.orderID}</div></CellsTitle>
               <CellsTitle>订单状态<div style={{textAlign:'right',float: 'right',color:this.props.orderState == "买入失败" ? 'red' : 'none'}}>{this.props.orderState}</div></CellsTitle>
               <CellsTitle>租金收益<div style={{textAlign:'right',float: 'right'}} ref="orderid">{this.props.amountIncome}</div></CellsTitle>
               </CellBody>
               </Cell>
               <Cell style={{display: this.props.orderState == "买入成功" ? null : 'none'}}> 
               	<CellBody>
               		<CellsTitle>
               		<Link to={{ pathname: '/orderInfo', query: { showAge: this.props.purchaseDate } }} activeClassName="active">
               			<div style={{textAlign:'center',color:'#888'}}>查看详情
               			</div></Link>
               		</CellsTitle>
               	</CellBody>
               </Cell>
               <Cell style={{display: this.props.orderState == "买入失败" ? null : 'none'}}> 
               	<CellBody>
               		<CellsTitle>
               			<div>
						            <div style={{float: 'left',width: '50%',textAlign:'center'}}>查看详情</div>
						            <div style={{float: 'right',width: '50%',textAlign:'center'}}>申请退款</div>
						      </div>
               		</CellsTitle>
               	</CellBody>
               </Cell>
          </Cells>
		);
	}
}
module.exports = OrderItem;


 