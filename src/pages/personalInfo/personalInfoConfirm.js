"use strict";

import React from 'react';
import Page from '../../component/page';
import { Link } from 'react-router'
import {Form,
    FormCell,
	CellHeader,
	Input,
	Select,
    CellBody,
    CellFooter,
    Button
}from 'react-weui'

export default class personalInfoConfirm extends React.Component{
     state={
          name:'',
          CardType:'身份证',
          cardNum:'',
          phoneNum:'',
          phoneMes:''
     };
       
     handleName(e){
				this.setState({
					name: e.target.value,
				});
				alert(e.target.value);
			}
	getMSG(){
		 if (this.state.phoneNum.legth==0) {
		 	 alert('请先出入手机号码');
		 }else{
		 	
		 }
	}		

     render() {
     	return (
     			<Page className='personalInfoConfirm' title='身份认证' spacing>
     			     <Form>
     			     		<FormCell>
     			     			<CellHeader>真实姓名</CellHeader>
								<CellBody onChange={this.props.handleName} style={{marginLeft:'20px'}}>
										<Input type="tel" placeholder="请输入验证码"/>
								</CellBody>
     			     		</FormCell>
     			     		<FormCell>
     			     			<CellHeader>证件类型</CellHeader>
								<CellBody  style={{marginLeft:'20px'}}>
										<p style={{color:'red'}}>{this.state.CardType}</p>
								</CellBody>
     			     		</FormCell>
     			     		<FormCell>
     			     			<CellHeader>证件号码</CellHeader>
								<CellBody style={{marginLeft:'20px'}}>
										<Input type="number" placeholder="请输入证件号码"/>
								</CellBody>
     			     		</FormCell>
     			     </Form>
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
										<Button type="default" size='small' plain='true' style={{marginBottom:'5px',marginTop:'5px',color:'000000',fontSize:'12px'}}>获取短信验证码</Button>
								</CellFooter>
     			     		</FormCell>
     			     </Form>
     			     <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
     			     		<Button style={{display:'block',background:'red',marginBottom:'20px',marginTop:'20px',height:'40px',width:'200px',margin:'auto',fontSize:'15px',color:'white'}}>提交信息</Button>
     			     </div>
     			</Page>
     	);
     }
};