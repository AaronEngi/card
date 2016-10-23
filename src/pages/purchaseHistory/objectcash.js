


//****--------------------实物提取--------------------//
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
import Objectcashitem from './objectcashitem'
import IconDown from './images/price_down_arrow.png';
import IconUp from './images/price_up_arrow.png';
import Arrow_down from './images/arrow_down.png';

export default class Objectcash extends React.Component {
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
              orderState:'审核中',
              amountIncome:'￥3.2',
              purchaseWay:'按克重',
              purchaseWeight:'5000g',
              orderID:'201221121231312',
              loading:false,
              address:'深圳市福田区'
            },{
              silverprice:'4.27元/克',
              purchaseDate:'2016-11-11',
              orderState:'已发货',
              amountIncome:'￥5.2',
              purchaseWay:'按克重',
              purchaseWeight:'1000g',
              orderID:'101221121231312',
              loading:false,
              address:'深圳市福田区天展大厦'
            }],
          loading:false,
     });
  };
  render() {
    if(this.state.loading){
      var repoList='Loading...';
    }else{
    var lists=this.state.items;
    var repoList = lists.map(function (repo, index) {
        return (
               <Objectcashitem silverprice={repo.silverprice} purchaseDate={repo.purchaseDate} 
                          orderID={repo.orderID} orderState={repo.orderState} 
                          amountIncome={repo.amountIncome} purchaseWay={repo.purchaseWay}
                          purchaseWeight={repo.purchaseWeight} address={repo.address}></Objectcashitem>
               );
            });
    }
    return (
		<InvestPage title="现金提取记录">
      {repoList}
		</InvestPage>
    );
  }
}
