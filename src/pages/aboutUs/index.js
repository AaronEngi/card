/**
 * Created by lzs on 2016-10-20.
 */
"use strict";
import React from 'react';
import InvestPage from '../../component/investPage';
import {Article} from 'react-weui';
import avatarSrc from '../cell/images/avatar.jpg';

export default class aboutUs extends React.Component {

    render() {
        return (
            <InvestPage title="关于小盈袋">
                <center><img src={avatarSrc} alt=""
                     style={{display: `block`,height:'100px',width:'100px'}}/></center>
                <Article>
                    <h1>大标题</h1>
                    <section>
                        <h2 className="title">章标题</h2>
                        <section>
                            <h3>1.1 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute</p>
                        </section>
                        <section>
                            <h3>1.2 节标题</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </section>
                    </section>
                </Article>
            </InvestPage>
        );
    }

};
