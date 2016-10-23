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
      CellsTitle ,
      TabBody,
      NavBar,
      NavBarItem,
      Article,
      TabBar,
      TabBarItem,
      Form,
      FormCell,
      Checkbox,
      TabBarIcon,
      TabBarLabel,
      Icon,
      Button
}from 'react-weui'

import { Link } from 'react-router'

export default class Pickup extends React.Component {
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
              days:'2天',
              loading:false,
     });
  };
  render() {
    if(this.state.loading){
     return (<div>Loading...</div>);
    }else{
      return (
          <InvestPage title="提取现金申请">
              <Cells>
                <Cell>
                  <CellBody>
                  提取金额
                  </CellBody>
                  <CellFooter>
                      <a style={{color:'red'}}>{this.state.amountIncome}</a>
                  </CellFooter>
                </Cell>
                <Cell>
                 <CellBody>
                 <CellsTitle>购买方式<div style={{textAlign:'right',float: 'right'}} >{this.state.purchaseWay}</div></CellsTitle>
                 <CellsTitle>提取克重<div style={{textAlign:'right',float: 'right'}}>{this.state.purchaseWeight}</div></CellsTitle>
                 <CellsTitle>提现银价<div style={{textAlign:'right',float: 'right',color:'green'}}>{this.state.silverprice}</div></CellsTitle>
                 <CellsTitle>对应金额<div style={{textAlign:'right',float: 'right',color:'red'}}>{this.state.amountIncome}</div></CellsTitle>
                 <CellsTitle>手续费<div style={{textAlign:'right',float: 'right',color:'red'}} ref="orderid">{this.state.amountIncome}</div></CellsTitle>
                 </CellBody>
                 </Cell>
                 <Cell> 
                  <CellBody>
                     <CellsTitle>持有天数<div style={{textAlign:'right',float: 'right'}} >{this.state.days}</div></CellsTitle>
                      <CellsTitle>租金收益(钱包内提取)<div style={{textAlign:'right',float: 'right',color:'red'}}>{this.state.amountIncome}</div></CellsTitle>
                  </CellBody>
                 </Cell>
                </Cells>
                <div className={'weui_cells_checkbox'} checkbox style={{marginTop:'18px'}} >
                    <FormCell checkbox>
                        <CellHeader>
                            <Checkbox name="checkbox1" value="1"/>
                        </CellHeader>
                        <CellBody>已同意小盈贷服务协议</CellBody>
                    </FormCell>
                </div>
              <CellsTitle><Icon value="warn" style={{marginRight:'8px'}}  />文字提示内容</CellsTitle>
              <Button style={{marginTop:'20px',width:'90%'}}>下一步</Button>
          		</InvestPage>
          );
    }
  }
}
