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

import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import IconCell from '../home/images/icon_nav_cell.png';
import OrderItem from './orderItem'
import IconDown from './images/price_down_arrow.png';
import IconUp from './images/price_up_arrow.png';
import Arrow_down from './images/arrow_down.png';

export default class PurchaseHistory extends React.Component {
  state = {
    items:[], 
    loading: true,
    tab:0,
    imageState:true,
  };
  componentDidMount(){
     this.setState({
          items: [{
              silverprice:'3.27元/克',
              purchaseDate:'2016-10-11',
              orderID:'20122112',
              orderState:'买入成功',
              amountIncome:'￥3.2'
            },{silverprice:'3.27元/克',
              purchaseDate:'2016-10-11',
              orderID:'20122112',
              orderState:'买入失败',
              amountIncome:'￥3.2'
            }],
          loading:false,
     });
  };
  imageClickHander(){
    var imgState=this.state.imageState;
    this.setState({
         imageState:!imgState,
    });
    console.log(this.state.imageState);
  }
  render() {
    if(this.state.loading){
      var repoList='Loading...';
    }else{
    var lists=this.state.items;
    var repoList = lists.map(function (repo, index) {
        return (
               <OrderItem silverprice={repo.silverprice} purchaseDate={repo.purchaseDate} 
                          orderID={repo.orderID} orderState={repo.orderState} 
                          amountIncome={repo.amountIncome}></OrderItem>
               );
            });
    }
    return (
		<InvestPage title="买入记录">
      <Tab>
                <NavBar>
                    <NavBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0,imageState:!this.state.imageState})}>购买日期<img style={{marginLeft:'5px',verticalAlign:'sub'}} src={this.state.imageState?IconUp:IconDown}/></NavBarItem>
                    <NavBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>购买记录<img onClick={this.imageClickHander.bind(this)} style={{marginLeft:'5px',verticalAlign:'middle'}} src={Arrow_down}/></NavBarItem>
                </NavBar>
                <TabBody>
                    <div style={{display: this.state.tab == 0 ? null : 'none'}}>
                        {repoList}
                    </div>
                    <Article style={{display: this.state.tab == 1 ? null : 'none'}}>
                      <div class="weui_dialog_alert" style={{display: this.state.tab == 1 ? null : 'none'}}>
                        <div class="weui_mask"></div>
                        <div class="weui_dialog">
                            <div class="weui_dialog_hd"><strong class="weui_dialog_title">弹窗标题</strong></div>
                            <div class="weui_dialog_bd">弹窗内容，告知当前页面信息等</div>
                            <div class="weui_dialog_ft">
                                <a href="#" class="weui_btn_dialog primary">确定</a>
                            </div>
                        </div>
                    </div>
                    </Article>
                </TabBody>
            </Tab>
		</InvestPage>
    );

  }
}
