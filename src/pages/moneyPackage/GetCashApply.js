 "use strict";

import React from 'react';
import { Link } from 'react-router'
import { Cells,
	   Cell,
	CellHeader,
    CellBody,
    CellFooter,
    Button,
    Label,
    Icon,
    Input,
    FormCell,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    PanelFooter
} from 'react-weui';
import Page from '../../component/page';
import './icons.less';
import InvestPage from '../../component/investPage';
import appMsgIcon from '../cell/images/avatar.jpg';
export default class GetCashApply extends React.Component{
	render(){
		return(
			<InvestPage title="提现申请">
               <div style={{borderTop:'1px solid #ededed',padding:'10px'}}>
                   <CellBody>可提现(元)</CellBody>
                   <CellBody style={{ color:'#ff0000',fontWeight:'bold',fontSize:'30px'}}>88.00</CellBody>
               </div>
               <FormCell>
                    <CellHeader>
                        <Label>提现金额</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="text" placeholder="本次最多可提现"/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>支付密码</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="text" placeholder="请输入支付密码"/>
                    </CellBody>
                </FormCell>
                <div style={{borderTop:'1px solid #ededed',height:'10px',backgroundColor:'#dddddd'}}></div>
                <Cell>
                    <CellBody>转入银行卡</CellBody>
                    <CellFooter>新增银行卡</CellFooter>
                </Cell>

                <Panel>
          
                    <PanelBody>
                        <MediaBox type="appmsg">
                            <MediaBoxHeader>{<img src={appMsgIcon} alt=""
                                                      style={{display: `block`}}/>}</MediaBoxHeader>
                            <MediaBoxBody>
                                <MediaBoxTitle>标题一</MediaBoxTitle>
                                <MediaBoxDescription>
                                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                 
                    </PanelBody>
                </Panel>
                <div style={{padding:'15px'}}>
                     <input type="checkbox"/><span>已同意小盈袋服务协议</span>
                </div>
                <div style={{marginTop: `15px`,marginLeft: `15px`}}>
                   <div>
                      <span><Icon value="info_circle" style={{marginRight: `15px`}}/></span>
                      <span>文字提示信息</span>
                   </div>
                </div>

                <div style={{margin:'20px'}}>
                      <Button type="warn" >按钮</Button>
                </div>
                
			</InvestPage>
		);
	}
}
