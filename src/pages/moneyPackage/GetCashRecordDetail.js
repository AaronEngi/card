"use strict";

import React from 'react';
import { Link } from 'react-router'
import { Cells,
	   Cell,
	CellHeader,
    CellBody,
    CellFooter,
    Button,
    Icon
} from 'react-weui';
import Page from '../../component/page';
import './icons.less';
import InvestPage from '../../component/investPage';
var orderList = {
    "data": [
        {
            "orderId": "1111 2222 3333 4444",
            "orderTime": "中国银行",
            "moneyCount": "5.00",
            "orderState": "已完成",
            "bandCard": "1111 2222 3333 4444"
        },
        {
            "orderId": "1111 2222 3333 4444",
            "orderTime": "中国银行",
            "moneyCount": "5.00",
            "orderState": "已完成",
            "bandCard": "1111 2222 3333 4444"
        },
        {
            "orderId": "1111 2222 3333 4444",
            "orderTime": "中国银行",
            "moneyCount": "5.00",
            "orderState": "已完成",
            "bandCard": "1111 2222 3333 4444"
        },
        {
            "orderId": "1111 2222 3333 4444",
            "orderTime": "中国银行",
            "moneyCount": "5.00",
            "orderState": "已完成",
            "bandCard": "1111 2222 3333 4444"
        }
    ]
};

export default class GetCashRecordDetail extends React.Component{
	
	render(){
		return(
              <InvestPage title="钱包提现记录">
              {
                orderList.data.map(function (data) {
                return <Cells>
                    <Cell>
                        <CellBody>
                            申请单号
                        </CellBody>
                        <CellFooter>
                            {data.orderId}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            申请时间
                        </CellBody>
                        <CellFooter>
                            {data.orderTime}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            提现金额
                        </CellBody>
                        <CellFooter>
                            {data.moneyCount}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            订单状态
                        </CellBody>
                        <CellFooter>
                            {data.orderState}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            转入账号
                        </CellBody>
                        <CellFooter>
                            {data.bandCard}
                        </CellFooter>
                    </Cell>
                </Cells>
                })

              }
              </InvestPage>
			);
	}
}