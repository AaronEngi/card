/**
 * Created by lzs on 2016-10-19.
 */

"use strict";
import React from 'react';
import InvestPage from '../../component/investPage';
import {Link} from 'react-router'
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
    CellFooter,
    Button
}from 'react-weui'

export default class keepWeightLibrary extends React.Component {

    render() {
        return (
            <InvestPage title="按克重买的银库">
                <div style={{
                    height: '100px',
                    cursor: 'pointer',
                    borderTop: '1px solid #d9d9d9',
                    borderBottom: '1px solid #d9d9d9'
                }}>
                    <div style={{height: '100px'}}>
                        <div style={{padding: '15px'}}>
                            <span>克重（克）</span>
                            <div className="weui_cell_ft" style={{
                                height: '6px',
                                width: '6px',
                                float: 'right',
                                borderTop: '2px solid #c8c8cd',
                                borderRight: '2px solid #c8c8cd',
                                transform: 'rotate(45deg)',
                                marginTop: '8px'
                            }}></div>
                            <span style={{float: 'right'}}>查看明细</span>
                        </div>
                        <div style={{marginLeft: '15px'}}>
                            <span>5000</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    height: '100px',
                    cursor: 'pointer',
                    borderTop: '1px solid #d9d9d9',
                    borderBottom: '1px solid #d9d9d9'
                }}>
                    <div style={{height: '100px'}}>
                        <div style={{padding: '15px'}}>
                            <span>白银现值（元）</span>
                        </div>
                        <div style={{marginLeft: '15px'}}>
                            <span>16200</span>
                        </div>
                    </div>
                </div>

                <div style={{position:'fixed',bottom:'0',width:'100%',height:'55px',borderTop:'2px solid #c8c8cd'}}>
                    <div style={{width: '33.33%', float: 'left'}}>
                        <center>
                                <span style={{lineHeight:'55px'}}>买入</span>
                        </center>
                    </div>
                    <div style={{width: '33.33%', float: 'left'}}>
                        <center>
                            <span style={{lineHeight:'55px'}}>提实物</span>
                        </center>
                    </div>
                    <div style={{width: '33.33%', float: 'left'}}>
                        <center>
                            <span style={{lineHeight:'55px'}}>提现金</span>
                        </center>
                    </div>
                </div>

            </InvestPage>
        );
    }

};