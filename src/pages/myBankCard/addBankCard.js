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

export default class addBankCard extends React.Component {

    render() {
        return (
            <InvestPage title="新增银行卡">
                <Form>
                    <FormCell>
                        <CellBody>
                            <Input placeholder="请输入银行卡号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellBody>
                            <Input placeholder="请输入持卡人姓名"/>
                        </CellBody>
                    </FormCell>
                </Form>
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
                    }}>确认提交</Button>

                </div>
            </InvestPage>
        );
    }

};
