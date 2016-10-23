/**
 * Created by lzs on 2016-10-19.
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
var cardList = {
    "data": [
        {
            "cardNum": "1111 2222 3333 4444",
            "bankName": "中国银行",
            "bankImg": "xxx"
        },
        {
            "cardNum": "4444 3333 2222 1111",
            "bankName": "中国银行",
            "bankImg": "xxx"
        },
        {
            "cardNum": "123 44321 2134 3124",
            "bankName": "中国银行",
            "bankImg": "xxx"
        },
        {
            "cardNum": "1314 3134 2134 1234",
            "bankName": "中国银行",
            "bankImg": "xxx"
        }
    ]
};

export default class myBankCard extends React.Component {


    render() {
        return (
            <InvestPage title="我的银行卡">
                {
                    cardList.data.map(function (data) {
                        return <PanelBody>
                            <MediaBox type="appmsg" href="javascript:void(0);">
                                <MediaBoxHeader>{<img src={avatarSrc} alt=""
                                                      style={{display: `block`}}/>}</MediaBoxHeader>
                                <MediaBoxBody>
                                    <MediaBoxTitle>{data.bankName}</MediaBoxTitle>
                                    <MediaBoxDescription>
                                        {data.cardNum}
                                    </MediaBoxDescription>
                                </MediaBoxBody>
                            </MediaBox>
                        </PanelBody>

                    })
                }
            </InvestPage>
        );
    }

};