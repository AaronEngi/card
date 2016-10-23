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
export default class GetCashRecord extends React.Component{



	render(){
		return(
			<page className='moneyPackage' title='我的钱包' >
            <Cells style={{marginBottom:'10px'}}>
                <div>
                  <Cell>
                    <CellBody>
                       提取金额
                    </CellBody>
                    <CellFooter style={{color:'#ff0000'}}>
                       ￥88.00
                    </CellFooter>
                  </Cell>
                </div>
                <div style={{height:'1px' , backgroundColor:'#ededed' , marginLeft:'15px',marginBottom:'10px'}}></div>
                <div>
                  <Cell>
                    <CellBody>
                       申请日期
                    </CellBody>
                    <CellFooter style={{color:'#cccccc'}}>
                       2016-10-01
                    </CellFooter>
                  </Cell>
                </div>
                <div>
                  <Cell>
                    <CellBody>
                       订单状态
                    </CellBody>
                    <CellFooter style={{color:'#ff0000'}}>
                       审核中
                    </CellFooter>
                  </Cell>
                </div>
                <div style={{height:'1px' , backgroundColor:'#ededed' , marginLeft:'15px',marginBottom:'10px'}}></div>
                <Link to={'/getCashRecordDetail'}>
                <div style={{textAlign:'center',padding:'5px'}}>查看详情</div>
                </Link>
            </Cells>
            </page>
			);
	}
        
}
