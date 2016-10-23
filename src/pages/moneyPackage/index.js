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
export default class moneyPackage extends React.Component {
	render() {
		return (
			<page className='moneyPackage' title='我的钱包' >
			<div>
                    <Cell>
                        <CellBody>
                            累计提现
                        </CellBody>
                        <Link to="/getCashRecord">
                            <Button type="default" size="small" style={{padding:'5px'}}>提现记录</Button>
                        </Link>
                    </Cell>
                    <CellBody style={{marginLeft: `15px`,color:'#ff0000',fontWeight:'bold'}}>
                            88.00
                    </CellBody>
            </div>
            <div style={{borderTop:'1px solid #d9d9d9',borderBottom:'1px solid #d9d9d9',backgroundColor:'#eeeeee',height:'10px',marginTop:'10px',marginBottom:'10px'}}></div>
            <div>
                <Cell>
                    <CellBody>
                        可提现
                    </CellBody>
                    <Link to="/priceSilver">
                        <Button type="default" size="small" style={{padding:'5px'}}>钱包明细</Button>
                    </Link>
                </Cell>
                <CellBody style={{marginLeft: `15px`,color:'#ff0000',fontWeight:'bold'}}>
                    3.24
                </CellBody>
                <Cells style={{height:'1px', marginLeft:'15px'}}/>

                <div style={{height:'40px'}}>
                   <div style={{float:'left',width:"50%",textAlign:'center',borderBottom:'1px solid #ededed'}}>
                        <div style={{borderRight:'1px solid #ededed',textAlign:'center',padding:'10px'}}><Link to={'/priceSilver'}>买入更多</Link></div>
                   </div>
                   <div style={{float:'right',width:"50%",textAlign:'center',borderBottom:'1px solid #ededed'}}>
                        <div style={{borderRight:'1px solid #ededed',textAlign:'center',padding:'10px'}}><Link to={'/priceSilver'}>提现</Link></div>
                   </div>
                </div>
            </div>
            
            <div style={{marginTop: `15px`}}>
                <div>
                    <span><Icon value="info_circle" style={{marginRight: `15px`}}/></span>
                    <span>文字提示信息</span>
                </div>
            </div>
            
            </page>
		);
		
	}
	
}