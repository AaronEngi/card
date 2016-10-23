"use strict";

import React from 'react';
import {Link} from 'react-router'
import Page from '../../component/page';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
}from 'react-weui'
import avatarSrc from '../cell/images/avatar.jpg';

export default class TabMy extends React.Component {

    state = {
        name: 'rock',
        isConfirm: '未验证',
        lastProceeds: '88.88'
    };

    render() {
        return (
            <page>
                <PanelBody style={{backgroundColor: 'orange'}}>
                    <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader>{<img src={avatarSrc} alt=""
                                              style={{display: `block`, borderRadius: '90px'}}/>}</MediaBoxHeader>
                        <MediaBoxBody>
                            <MediaBoxTitle
                                style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    float: 'left'
                                }}>{this.state.name}</MediaBoxTitle>
                            <MediaBoxDescription
                                style={{color: 'white', fontWeight: 'bold', float: 'right', lineHeight: '2.5'}}>
                                {this.state.isConfirm}
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                    <div style={{color: 'white', margin: '20px'}}>
                        <span>昨日租金收益（元）</span>
                    </div>
                    <div style={{marginLeft: '20px', paddingBottom: '20px'}}>
                        <span style={{color: 'white', fontWeight: 'bold'}}>{this.state.lastProceeds}</span>
                    </div>
                </PanelBody>

                <div style={{height: '100px'}}>
                    <Link to={'/keepWeightLibrary'}>
                        <div style={{
                            width: '50%',
                            float: 'left',
                            height: '100px',
                            cursor: 'pointer',
                            borderTop: '1px solid #d9d9d9',
                            borderBottom: '1px solid #d9d9d9'
                        }}>
                            <div style={{height: '100px', borderRight: '1px solid #d9d9d9'}}>
                                <div style={{padding: '15px'}}>
                                    <span>保克重银库</span>
                                    <div className="weui_cell_ft" style={{
                                        height: '6px',
                                        width: '6px',
                                        float: 'right',
                                        borderTop: '2px solid #c8c8cd',
                                        borderRight: '2px solid #c8c8cd',
                                        transform: 'rotate(45deg)',
                                        marginTop: '8px'
                                    }}></div>
                                </div>
                                <div style={{marginLeft: '15px'}}>
                                    <span>5000g</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/keepMoneyLibrary'}>
                        <div style={{
                            width: '50%',
                            float: 'right',
                            height: '100px',
                            cursor: 'pointer',
                            borderTop: '1px solid #d9d9d9',
                            borderBottom: '1px solid #d9d9d9'
                        }}>
                            <div style={{height: '100px'}}>
                                <div style={{padding: '15px'}}>
                                    <span>保金额银库</span>
                                    <div className="weui_cell_ft" style={{
                                        height: '6px',
                                        width: '6px',
                                        float: 'right',
                                        borderTop: '2px solid #c8c8cd',
                                        borderRight: '2px solid #c8c8cd',
                                        transform: 'rotate(45deg)',
                                        marginTop: '8px'
                                    }}></div>
                                </div>
                                <div style={{marginLeft: '15px'}}>
                                    <span>8888元</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <Cells access style={{marginTop: '0px', overflow: 'visible'}}>
                        <Cell href="javascript:;">
                            <CellBody>
                                交易记录
                            </CellBody>
                        </Cell>
                    </Cells>
                </div>
                <div style={{height: '100px'}}>
                    <div style={{width: '25%', float: 'left'}}>
                        <center>
                            <Link to={'/purchaseHistory'}>
                                <img src={avatarSrc} alt=""
                                     style={{display: `block`, width: `60px`, margin: `10px`, borderRadius: '90px'}}/>
                                <span>买入</span></Link>
                        </center>
                    </div>
                    <div style={{width: '25%', float: 'left'}}>
                        <center>
                            <Link to={'/objectpickup'}>
                                <img src={avatarSrc} alt=""
                                     style={{display: `block`, width: `60px`, margin: `10px`, borderRadius: '90px'}}/>
                                <span>提实物</span></Link>
                        </center>
                    </div>
                    <div style={{width: '25%', float: 'left'}}>
                        <center>
                            <Link to={'/objectcash'}>
                                <img src={avatarSrc} alt=""
                                     style={{display: `block`, width: `60px`, margin: `10px`, borderRadius: '90px'}}/>
                                <span>提现金</span></Link>
                        </center>
                    </div>
                    <div style={{width: '25%', float: 'left'}}>
                        <center>
                            <img src={avatarSrc} alt=""
                                 style={{display: `block`, width: `60px`, margin: `10px`, borderRadius: '90px'}}/>
                            <span>回购</span>
                        </center>
                    </div>
                </div>

                <Cells access>
                    <Cell href="javascript:;">
                        <CellBody>
                            我的钱包
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                    <Link to={'/myBankCard'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                我的银行卡
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                </Cells>

                <div style={{height: '10px', backgroundColor: '#f0f0f0'}}></div>

                <Cells access style={{marginTop: '0px'}}>
                    <Cell href="javascript:;">
                        <CellBody>
                            申请回购
                        </CellBody>
                        <CellFooter>
                        </CellFooter>
                    </Cell>
                </Cells>
                <div style={{height: '10px', backgroundColor: '#f0f0f0'}}></div>
                <Cells access style={{marginTop: '0px'}}>
                    <Link to={'/setting'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                设置（收货地址）
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                </Cells>
            </page>
        );
    }

};