/**
 * Created by n7best.
 */

"use strict";

import React from 'react';
import TabIndex from '../tabIndex/tabIndex';
import TabOffline from './tabOffline';
import TabService from './tabService';
import TabMy from './tabMy';

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} from 'react-weui';

import IconButton from '../home/images/icon_nav_button.png';
import IconMsg from '../home/images/icon_nav_msg.png';
import IconArticle from '../home/images/icon_nav_article.png';
import IconCell from '../home/images/icon_nav_cell.png';

export default class InvestIndex extends React.Component {
    state={
        tab:0
    };

    render() {
    	let width = document.body.clientWidth;
        return (
            <Tab>
                <TabBody>
					<div style={{display: this.state.tab == 0 ? null : 'none'}}><TabIndex/></div>
					<div style={{display: this.state.tab == 1 ? null : 'none'}}><TabOffline/></div>
					<div style={{display: this.state.tab == 3 ? null : 'none'}}><TabMy/></div>
                </TabBody>
                <TabBar style={{width:width, position: 'fixed'}}>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={e=>this.setState({tab:0})}
                        icon={<img src={IconButton}/>}
                        label="首页"
                    />
                    <TabBarItem active={this.state.tab == 1} 
						onClick={e=>this.setState({tab:1})}>
                        <TabBarIcon>
                            <img src={IconMsg}/>
                        </TabBarIcon>
                        <TabBarLabel>门店</TabBarLabel>
                    </TabBarItem>

                    <TabBarItem
                        active={this.state.tab == 3}
                        onClick={e=>this.setState({tab:3})}
                        icon={<img src={IconCell}/>}
                        label="我的"
                    />
                </TabBar>
            </Tab>
        );
    }
};
