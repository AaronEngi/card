/**
 * Created by lzs on 2016-10-20.
 */
"use strict";

import React from 'react';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';
import InvestPage from '../../component/investPage';
import avatarSrc from '../cell/images/avatar.jpg';
var addressList = {
    "data": [
        {
            "address": "广东省深圳市翠竹街道罗湖区水贝水田二街宝琳国金珠宝交易中心5A"
        },
        {
            "address": "广东省深圳市翠竹街道罗湖区水贝水田二街宝琳国金珠宝交易中心5B"
        },
        {
            "address": "广东省深圳市翠竹街道罗湖区水贝水田二街宝琳国金珠宝交易中心5C"
        },
        {
            "address": "广东省深圳市翠竹街道罗湖区水贝水田二街宝琳国金珠宝交易中心5D"
        }
    ]
};

export default class addressManager extends React.Component {


    render() {
        return (
            <InvestPage title="收货地址">
                {
                    addressList.data.map(function (data) {
                        return <Cells access style={{marginTop:'0px'}}>
                            <Cell href="javascript:;">
                                <CellBody>
                                    {data.address}
                                </CellBody>
                                <CellFooter>
                                </CellFooter>
                            </Cell>
                        </Cells>

                    })
                }
            </InvestPage>
        );
    }

};