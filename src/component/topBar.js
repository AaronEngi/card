/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import { browserHistory } from 'react-router'

export default class TopBar extends React.Component {
    render() {
        return (
			<div style={{textAlign: 'center',margin:'8px'}}>
				<a style={{float:'left'}} onClick={this.goBack}>返回</a> {this.props.title}
				
			</div>
        );
    }
	
	goBack(){
		browserHistory.goBack();
	}
};