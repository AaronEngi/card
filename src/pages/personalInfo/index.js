"use strict";

import React from 'react';
import Page from '../../component/page';
import { Link } from 'react-router'
import {Cells,
	   Cell,
	CellHeader,
    CellBody,
    CellFooter,
    Button
}from 'react-weui'
import avatarSrc from '../cell/images/avatar.jpg';


export default class personalInfoDemo extends React.Component{

  state={
      name:'rock',
      cardType:'身份证',
      cardNum:'362430198906108115'
  };

	render() {
		return (
			<page className='personalInfoDemo' title='个人信息' spacing>
              <Cells>
              		<Cell>
              		   <CellHeader><img src={avatarSrc} alt="" style={{display: `block`, width: `40px`, marginRight: `5px`,borderRadius:'20px'}}/></CellHeader>
              		   <CellBody>用户名</CellBody>
              		</Cell>
              </Cells>
              <Cells access>
              		<Cell>
              			<CellBody>真实姓名</CellBody>
              			<CellFooter>{this.state.name}</CellFooter>
              		</Cell>
              		<Cell>
              			<CellBody>证件类型</CellBody>
              			<CellFooter>{this.state.cardType}</CellFooter>
              		</Cell>
              		<Cell>
              			<CellBody>证件号码</CellBody>
              			<CellFooter>{this.state.cardNum}</CellFooter>
              		</Cell>
              </Cells>
              <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                    <Link to={'/personalInfoComfirm'}>
                        <Button style={{display:'block',background:'red',marginBottom:'20px',marginTop:'20px',height:'40px',width:'200px',margin:'auto',fontSize:'15px',color:'white'}}>去验证个人信息</Button>
                    </Link>
              </div>
			</page>
		);
	}

};