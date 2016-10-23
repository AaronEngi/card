
import React from 'react';
import InvestPage from '../../component/investPage.js';
import { Link } from 'react-router'
import './purchase.less'

import {Form,
    Button,
    FormCell,
    Cells,
    Cell,
	CellHeader,
	Input,
	Select,
    CellBody,
    CellFooter,
    Radio,
    Checkbox,
}from 'react-weui'

var purchase = React.createClass({
	getInitialState: function() {
		return {
			sliverPrice:3.24,
			sliverWeight:500,
			sliverCount:1,
            paymentState:'余额',
            isconvention:false,
		};
	},
     refreshSliverCount(e){
         e.preventDefault();
         var value = e.target.value;
            this.setState({
              sliverCount:value?value:1
            });
     } ,  
     toDecimal2(x) {    // 强制保留2位小数
        var f = parseFloat(x);    
        if (isNaN(f)) {    
            return false;    
        }    
        var f = Math.round(x*100)/100;    
        var s = f.toString();    
        var rs = s.indexOf('.');    
        if (rs < 0) {    
            rs = s.length;    
            s += '.';    
        }    
        while (s.length <= rs + 2) {    
            s += '0';    
        }    
        return s;    
    } ,
    refreshSliversize(e){
        this.setState({
              sliverWeight:e.target.value,
            });

    },
    refreshPayment(e){
        this.setState({
              paymentState:e.target.value,
            });
    },
    submitPruchaseinfo(){
          var paymentState = this.state.paymentState;
          var sliverWeight = this.state.sliverWeight;
          var isconvention = this.state.isconvention;

          if (!isconvention) {
                alert('请先行阅读小银贷服务协议');
          }

          alert(paymentState);
          alert(sliverWeight);

    },
    refreshSliverpact(e){
        this.setState({
              isconvention:!this.state.isconvention,
            });
    },
    prompt(){
            alert('hi二狗IE何工我合格和认购我火 读书郎换个问过了人 ');
    },

	render: function() {
		return (
			<InvestPage className='purchaseDemo' title='保克重' spacing>
					<div>
					 		<div><span className='currentPrice'>{this.state.sliverPrice}</span></div>
					 		<div><span className='currentDes'>实时银价  (元/克)</span></div>
					</div>
                     <Form>
                     		<FormCell select style={{height:'44px'}}>
                     			<CellHeader style={{marginLeft:'15px'}}>克重（克）</CellHeader>
                     			<CellBody>
                     					<Select onChange={this.refreshSliversize} defaultValue="500">
                                            <option value="500">500g</option>
                                            <option value="100">100g</option>
                                            <option value="50">50g</option>
                                        </Select>
                     			</CellBody>
                     			<CellFooter >           
                                </CellFooter>
                     		</FormCell>
                     		<FormCell>
                     			<CellHeader>数 量</CellHeader>
                     			<CellBody style={{marginLeft:'45px'}}><Input onChange={this.refreshSliverCount}  placeholder="1"/></CellBody>
                     			<CellFooter></CellFooter>
                     		</FormCell>
                     		<FormCell>
                     			<CellHeader>金额（元）</CellHeader>
                     			<CellBody>{this.toDecimal2(this.state.sliverPrice*this.state.sliverCount*this.state.sliverWeight)}</CellBody>
                     			<CellFooter></CellFooter>
                     		</FormCell>
                     </Form>

 					 <Form radio >
                            <FormCell> 
                                <CellHeader>支付方式</CellHeader>
                            </FormCell>
                            <FormCell radio >
                                 <CellBody>微信支付</CellBody>
                                    <CellFooter >
                                             <Radio onChange={this.refreshPayment} value="微信"  name="radio1"/>
                                    </CellFooter>
                            </FormCell>
                            <FormCell radio >
                                    <CellBody>余额支付</CellBody>
                                    <CellFooter >
                                             <Radio onChange={this.refreshPayment} value="余额" name="radio1" defaultChecked />
                                    </CellFooter>
                            </FormCell>
                     </Form>

                     <div className={'weui_cells_checkbox'} checkbox style={{marginTop:'18px'}} >
                            <FormCell checkbox>
                                <CellHeader>
                                    <Checkbox onChange={this.refreshSliverpact} />
                                </CellHeader>
                                <CellBody>已同意小盈贷服务协议</CellBody>
                            </FormCell>
                     </div>

                     <div className={'weui_cells_checkbox'} checkbox style={{marginBottom:'30px'}} >
                            <FormCell checkbox>
                                <CellHeader>
                                    <Checkbox onChange={this.prompt} checked/>
                                </CellHeader>
                                <CellBody>文字提示内容</CellBody>
                            </FormCell>
                     </div>

                    <Button  onClick={this.submitPruchaseinfo}
                    className='nextBtn' style={{width:"250px",height:'40px'}}>立即支付</Button>
			</InvestPage>
		);
	}

});

module.exports = purchase;