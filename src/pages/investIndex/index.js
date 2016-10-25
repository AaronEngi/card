/**
 * Created by n7best.
 */

"use strict";

import React from 'react';
import PostCard from '../../component/postcard/postcard';
import CardImg from '../../component/postcard/cardImg';

export default class InvestIndex extends React.Component {

    render() {
    	return(
    		<div>
	    		<CardImg />
		    	<PostCard />
	    	</div>
    	);
    }
};
