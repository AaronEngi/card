

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

export class Objectpickupitem extends React.Component {

	render() {
		return (
			<Cells>
              <Cell>
              	<CellBody>
              	提取克重
              	</CellBody>
                <CellFooter>
                    <a style={{color:'red'}}>500g</a>
                </CellFooter>
              </Cell>
              <Cell>
               <CellBody>
               <CellsTitle>提取银价<div style={{textAlign:'right',float: 'right'}} value={this.props.orderID}>{this.props.silverprice}</div></CellsTitle>
               <CellsTitle>提取日期<div style={{textAlign:'right',float: 'right'}}>{this.props.purchaseDate}</div></CellsTitle>
               <CellsTitle>手续费<div style={{textAlign:'right',float: 'right'}} >{this.props.amountIncome}</div></CellsTitle>
               <CellsTitle>订单状态<div style={{textAlign:'right',float: 'right',color:'red'}}>{this.props.orderState}</div></CellsTitle>
               </CellBody>
               </Cell>
               <Cell> 
               	<CellBody>
               		<CellsTitle>
               		<Link to={{ pathname: '/objectpickupinfo', query: { showAge: this.props.purchaseDate } }} activeClassName="active">
               			<div style={{textAlign:'center',color:'#888'}}>查看详情
               			</div></Link>
               		</CellsTitle>
               	</CellBody>
               </Cell>
          </Cells>
		);
	}
}
module.exports = Objectpickupitem;


 