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
            "moneyState": "1111 2222 3333 4444",
            "moneyTime": "中国银行",
            "moneyCount": "5.00"
        },
        {
            "moneyState": "1111 2222 3333 4444",
            "moneyTime": "中国银行",
            "moneyCount": "5.00"
        },
        {
            "moneyState": "1111 2222 3333 4444",
            "moneyTime": "中国银行",
            "moneyCount": "5.00"
        },
        {
            "moneyState": "1111 2222 3333 4444",
            "moneyTime": "中国银行",
            "moneyCount": "5.00"
        }
    ]
};

export default class MoneyPackageDetail extends React.Component{
	render(){
		return(
			<InvestPage title="钱包明细">
            {
              orderList.data.map(function (data) {
                return <Cells>
                    <Cell>
                        <CellBody>
                            {data.moneyState}
                        </CellBody>
                        <CellFooter type="default" size="small" style={{padding:'5px',fontWeight:'bold'}}>{data.moneyCount}</CellFooter>
                    </Cell>
                    <CellBody style={{marginLeft: `15px`,}}>
                            {data.moneyTime}
                    </CellBody>
                </Cells>
              })
            }
			</InvestPage>
		);
	}
}