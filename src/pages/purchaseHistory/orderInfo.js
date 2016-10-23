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


export default class OrderInfo extends React.Component {
  state = {
              silverprice:'3.27元/克',
              purchaseDate:'2016-10-11',
              orderID:'20122112',
              orderState:'买入成功',
              amountIncome:'￥3.2',
              loading:true,
              tab:0,
              imageState:true,
  };
  componentDidMount(){
     this.setState({
              silverprice:'6.27元/克',
              purchaseDate:'2017-10-11',
              purchaseWay:'按克重',
              purchaseWeight:'5000g(500g*10)',
              orderID:'201221121231312',
              orderState:'买入失败',
              amountIncome:'￥3.2',
              loading:false,
     });
  };
  render() {
    if(this.state.loading){
     return (<div>Loading...</div>);
    }else{
      return (
          		<InvestPage title="买入订单详情">
                    <Cells>
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
                        <Cell>
                          <CellHeader>
                            <Label>买入克重</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.purchaseWeight}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>买入银价</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.silverprice}
                          </CellBody>
                        </Cell>
                        <Cell>
                          <CellHeader>
                            <Label>买入金额</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.amountIncome}
                          </CellBody>
                        </Cell>
                    </Cells>
                    <Cells >
                      <Cell>
                          <CellHeader>
                            <Label>订单状态</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderState}
                          </CellBody>
                      </Cell>
                    </Cells>
                    <Cells access>
                      <Cell>
                          <CellHeader>
                            <Label>计息天数</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderState}
                          </CellBody>
                      </Cell>
                       <Cell>
                          <CellHeader>
                            <Label>计息利率</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderState}
                          </CellBody>
                      </Cell>
                       <Cell>
                          <CellHeader>
                            <Label>可提收益</Label>
                          </CellHeader>
                          <CellBody>
                            {this.state.orderState}
                          </CellBody>
                      </Cell>
                       <Cell>
                          <CellBody>
                            租金收益提取记录
                          </CellBody>
                          <CellFooter></CellFooter>
                      </Cell>
                    </Cells>
                    <div style={{position:'absolute',bottom: '0px', right: '0px',width:'100%',padding: '8px',borderTop: '1px solid #d9d9d9',}}>
                        <Button type="default" size="small" style={{marginLeft:'8px',float:'right'}} >提取收益</Button>
                        <Link to={{pathname: '/pickup'}}><Button type="default" size="small" style={{marginLeft:'8px',float:'right'}} >卖出</Button></Link>
                        <Link to={{pathname: '/pickup'}}>
                        <Button type="default" size="small" style={{marginLeft:'8px',float:'right'}} >提银条</Button></Link>
                    </div>
          		</InvestPage>
          );
    }
  }
}
