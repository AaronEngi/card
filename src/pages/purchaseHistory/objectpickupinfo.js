"use strict";

import createG2 from 'g2-react';
import { Stat } from 'g2';
import React from 'react';
import ReactDOM from 'react-dom';

import InvestPage from '../../component/investPage';
import {Cells,
       Cell,
      CellHeader,
      CellBody,
      CellFooter,
      Tab,
      Label,
      TabBody,
      NavBar,
      NavBarItem,
      Article,
      TabBar,
      TabBarItem,
      TabBarIcon,
      TabBarLabel,
      Button
}from 'react-weui'

import { Link } from 'react-router'
import IconDown from './images/location_down.png';
import IconUp from './images/location_up.png';

export default class Objectpickupinfo extends React.Component {
  state = {
    IsUpNotDown:false,

              silverprice:'3.27元/克',
              purchaseDate:'2016-10-11',
              orderState:'已发货',
              amountIncome:'￥3.2',
              purchaseWay:'按克重',
              purchaseWeight:'5000g',
              orderID:'201221121231312',
              loading:false,
              address:'深圳市福田区'
            
  };
  render() {
    if(this.state.loading){
     return (<div>Loading...</div>);
    }else{
      return (
          		<InvestPage title="提取实物订单详情">
                    <Cells>
                        <Cell>
                          <CellHeader>
                            <Label>提取单号</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderID}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>订单状态</Label>
                          </CellHeader>
                          <CellBody style={{color:'red'}}>
                            {this.state.orderState}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>提取时间</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseDate}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>提取克重</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseWeight}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>提取银价</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.silverprice}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>手续费</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.amountIncome}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>收货地址</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.address}
                          </CellBody>
                        </Cell>
                    </Cells>
                    <Cells style={{marginBottom:'40px'}} >
                      <Cell onClick={e=>this.setState({IsUpNotDown:!this.state.IsUpNotDown})}>
                          <CellHeader>
                            <Label>买入信息</Label>
                          </CellHeader>
                          <CellBody>
                          </CellBody>
                           <CellFooter><img style={{marginLeft:'5px',verticalAlign:'middle'}} src={this.state.IsUpNotDown?IconUp:IconDown}/></CellFooter>
                      </Cell>
                      <Cells style={{display: this.state.IsUpNotDown ? null : 'none',marginTop: '0px'}}>
                       <Cell>
                          <CellHeader>
                            <Label>买入单号</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderID}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>买入时间</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseDate}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>买入方式</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseWay}
                          </CellBody>
                        </Cell>
                        <Cell >
                          <CellHeader>
                            <Label>买入克重</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseWeight}
                          </CellBody>
                        </Cell>
                        <Cell >
                          <CellHeader>
                            <Label>买入银价</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.silverprice}
                          </CellBody>
                        </Cell>
                        <Cell >
                          <CellHeader>
                            <Label>买入金额</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.amountIncome}
                          </CellBody>
                        </Cell>
                        </Cells>
                    </Cells>
                    <div style={{display: this.state.orderState=='已发货' ? null : 'none',backgroundColor: 'rgb(217, 217, 217)',position:'fixed',bottom: '0px', right: '0px',width:'100%',   padding: '8px',borderTop: '1px solid #d9d9d9',}}>
                        <Button type="default" size="small" style={{marginLeft:'8px',float:'right'}} >查看物流</Button>
                        <Button type="default" size="small" style={{marginLeft:'8px',float:'right'}} >确认收货</Button>
                    </div>
          		</InvestPage>
          );
    }
  }
}
