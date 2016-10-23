/**
 * Created by lzs on 2016-10-20.
 */
"use strict";
import React from 'react';
import InvestPage from '../../component/investPage';
import {Link} from 'react-router'
import {Form,
    FormCell,
    CellHeader,
    Input,
    Select,
    CellBody,
    CellFooter,
    Button
}from 'react-weui'

export default class paymentPwd extends React.Component {

    render() {
        return (
            <InvestPage title="设置支付密码">
                <Form>
                    <FormCell>
                        <CellHeader>手机号码</CellHeader>
                        <CellBody style={{marginLeft:'20px'}}>
                            <Input type="number" placeholder="请输入手机号码"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>短信验证</CellHeader>
                        <CellBody style={{marginLeft:'20px'}}>
                            <Input type="tel" placeholder="请输入短信验证码"/>
                        </CellBody>
                        <CellFooter>
                            <Button type="default" size='small' plain='true' style={{marginBottom:'5px',marginTop:'5px',color:'000000',fontSize:'12px'}}>获取验证码</Button>
                        </CellFooter>
                    </FormCell>
                </Form>

                <Form>
                    <FormCell>
                        <CellHeader>设置密码</CellHeader>
                        <CellBody style={{marginLeft:'20px'}}>
                            <Input type="number" placeholder="请输入6位数值的支付密码"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>确认密码</CellHeader>
                        <CellBody style={{marginLeft:'20px'}}>
                            <Input type="tel" placeholder="请输入6位数值的支付密码"/>
                        </CellBody>
                    </FormCell>
                </Form>
            </InvestPage>
        );
    }

};
