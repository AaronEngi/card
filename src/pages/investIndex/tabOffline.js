"use strict";

import React from 'react';

import {
    Article
} from 'react-weui';

export default class TabOffline extends React.Component {
	render() {
		return(
			<div>
			        <Article >
                        <h1>选项页1</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>
                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
			</div>	
		);
	}
}