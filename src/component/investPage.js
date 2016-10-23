/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';

import TopBar from './topBar';

export default class InvestPage extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
				<TopBar title={this.props.title}/>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};