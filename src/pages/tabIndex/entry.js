"use strict";

import React from 'react';

import ImgUrlUtil from '../../util/imgUrlUtil';
import WINDOW_WIDTH from '../../config/config';

export default class Entry extends React.Component {
    render() {
    	let imgWidth = WINDOW_WIDTH/2;
        let imgUrl = ImgUrlUtil.imgFullUrl(this.props.img, imgWidth);

        return (        	
        	<div onClick={this.props.onClick}>
	        	<img src={this.props.img} />
	        	<div>{this.props.mainTitle}</div>
	        	<div>{this.props.subTitle}</div>
        	</div>
        );
    }
};