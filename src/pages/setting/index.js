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

export default class setting extends React.Component {

    render() {
        return (
            <InvestPage title="设置">
                <Cells access style={{marginTop: '0px'}}>
                    <Link to={'/personalInfo'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                个人信息
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                    <Link to={'/addressManager'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                收货地址
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                    <Link to={'/paymentPwd'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                设置支付密码
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                </Cells>

                <div style={{height: '20px', backgroundColor: '#f0f0f0'}}></div>

                <Cells access style={{marginTop: '0px'}}>
                    <Link to={'/feedback'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                意见反馈
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                    <Link to={'/service'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                服务协议
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                    <Link to={'/aboutUs'}>
                        <Cell href="javascript:;">
                            <CellBody>
                                关于小盈袋
                            </CellBody>
                            <CellFooter>
                            </CellFooter>
                        </Cell>
                    </Link>
                </Cells>
                <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    <Button style={{
                        display: 'block',
                        background: 'red',
                        marginBottom: '20px',
                        marginTop: '20px',
                        height: '40px',
                        width: '200px',
                        margin: 'auto',
                        fontSize: '15px',
                        color: 'white'
                    }}>退出登录</Button>

                </div>
            </InvestPage>
        );
    }

};