/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';
import WeUI from 'react-weui';


import Home from './pages/home/index';
import Button from './pages/button/index';
import Cell from './pages/cell/index';
import Toast from './pages/toast/index';
import Dialog from './pages/dialog/index';
import Progress from './pages/progress/index';
import Msg from './pages/msg/index';
import Article from './pages/article/index';
import ActionSheet from './pages/actionsheet/index';
import Icons from './pages/icons/index';
import Panel from './pages/panel/index';
import Tab from './pages/tab/index';
import NavBar from './pages/tab/navbar';
import NavBar2 from './pages/tab/navbar_auto';
import TabBar from './pages/tab/tabbar';
import TabBar2 from './pages/tab/tabbar_auto';
import SearchBar from './pages/searchbar/index';

import InvestIndex from './pages/investIndex/index';
import PriceSilver from './pages/priceLine/priceSilver';
import personalInfo from './pages/personalInfo/index';
import personalInfoComfirm from './pages/personalInfo/personalInfoConfirm';
import moneyPackage from './pages/moneyPackage/index';
import purchase from './pages/shoppingGuide/purchase.js'
import purchaseCash from './pages/shoppingGuide/purchaseCash.js'
import pickupSliverItem from './pages/shoppingGuide/pickupSliverItem'

import myBankCard from  './pages/myBankCard/index';
import setting from './pages/setting/index';
import GetCashRecord from './pages/moneyPackage/GetCashRecord';
import GetCashRecordDetail from './pages/moneyPackage/GetCashRecordDetail';
import MoneyPackageDetail from './pages/moneyPackage/MoneyPackageDetail';
import GetCashApply from './pages/moneyPackage/GetCashApply';
import addressManager from './pages/addressManager/index';
import paymentPwd from  './pages/paymentPwd/index';
import feedback from './pages/feedback/index';
import service from './pages/service/index';
import aboutUs from './pages/aboutUs/index';


import OrderItem from './pages/purchaseHistory/orderItem'
import PurchaseHistory from './pages/purchaseHistory/purchaseHistory'
import OrderInfo from './pages/purchaseHistory/orderInfo'
import Pickup from './pages/purchaseHistory/pickup'
import Objectpickup from './pages/purchaseHistory/objectpickup'
import Objectpickupitem from './pages/purchaseHistory/objectpickupitem'
import Objectpickupinfo from './pages/purchaseHistory/objectpickupinfo'
import Objectcash from './pages/purchaseHistory/objectcash'
import Objectcashitem from './pages/purchaseHistory/objectcashitem'
import Objectcashinfo from './pages/purchaseHistory/objectcashinfo'
import keepWeightLibrary from './pages/SliverLibraries/keepWeightLibrary';
import keepMoneyLibrary from './pages/SliverLibraries/keepMoneyLibrary';
import addBankCard from './pages/myBankCard/addBankCard';


class App extends React.Component {
        render() {
                return (
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="page"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        style={{height: '100%'}}
                    >
                            {React.cloneElement(this.props.children, {
                                    key: this.props.location.pathname
                            })}
                    </ReactCSSTransitionGroup>
                );
        }
}

ReactDOM.render((
    <Router>
            <Route path="/" component={App}>

                    <IndexRoute component={InvestIndex}/>
					<Route path="priceSilver" component={PriceSilver}/>
                    <Route path='personalInfo' component={personalInfo}/>
                    <Route path='personalInfoComfirm' component={personalInfoComfirm}/>
                    <Route path='purchase' component={purchase}/>
                    <Route path='purchaseCash' component={purchaseCash}/>
                    <Route path='pickupSliverItem' component={pickupSliverItem}/>
					<Route path="weui" component={Home}/>
                    <Route path="button" component={Button}/>
                    <Route path="cell" component={Cell}/>
                    <Route path="toast" component={Toast}/>
                    <Route path="dialog" component={Dialog}/>
                    <Route path="progress" component={Progress}/>
                    <Route path="msg" component={Msg}/>
                    <Route path="article" component={Article}/>
                    <Route path="actionsheet" component={ActionSheet}/>
                    <Route path="icons" component={Icons}/>
                    <Route path="panel" component={Panel}/>
                    <Route path="tab" component={Tab}/>
                    <Route path="navbar" component={NavBar}/>
                    <Route path="navbar2" component={NavBar2}/>
                    <Route path="tabbar" component={TabBar}/>
                    <Route path="tabbar2" component={TabBar2}/>
                    <Route path="searchbar" component={SearchBar}/>
                    <Route path="myBankCard" component={myBankCard}/>
                    <Route path="setting" component={setting}/>
					<Route path="getCashRecord" component={GetCashRecord}/>
					<Route path="getCashRecordDetail" component={GetCashRecordDetail}/>
                    <Route path="addressManager" component={addressManager}/>
                    <Route path="paymentPwd" component={paymentPwd}/>
                    <Route path="feedback" component={feedback}/>
                    <Route path="service" component={service}/>
                    <Route path="aboutUs" component={aboutUs}/>

                    <Route path="objectcash" component={Objectcash}/>
                    <Route path="objectcashitem" component={Objectcashitem}/>
                    <Route path="objectcashinfo" component={Objectcashinfo}/>

                    <Route path="objectpickup" component={Objectpickup}/>
                    <Route path="objectpickupitem" component={Objectpickupitem}/>
                    <Route path="objectpickupinfo" component={Objectpickupinfo}/>

                    <Route path="pickup" component={Pickup}/>
                    <Route path="orderItem" component={OrderItem}/>
                    <Route path="purchaseHistory" component={PurchaseHistory}/>
                    <Route path="orderInfo" component={OrderInfo}/>

                    <Route path="keepWeightLibrary" component={keepWeightLibrary}/>
                    <Route path="keepMoneyLibrary" component={keepMoneyLibrary}/>

                    <Route path="addBankCard" component={addBankCard}/>
            </Route>
    </Router>
), document.getElementById('root'));