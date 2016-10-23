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
    TextArea,
    Button
}from 'react-weui'

export default class feedback extends React.Component {

    render() {
        return (
            <InvestPage title="客服/反馈">

                <Form>
                    <FormCell>
                        <CellBody>
                            <TextArea placeholder="请输入评论" rows="3" maxlength="200"></TextArea>
                        </CellBody>
                    </FormCell>
                </Form>

                 <div style={{margin:'20px'}}>
                     <span>客服电话：xxxxxxxxxxxxxxxxxxxxxx(服务时间：xxxxxxxxxxxxxxxxxxxxxx)</span>
                 </div>
            </InvestPage>
        );
    }

};
