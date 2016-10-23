"use strict";

import createG2 from 'g2-react';
import { Stat } from 'g2';
import React from 'react';
import ReactDOM from 'react-dom';

import InvestPage from '../../component/investPage';


const data = [
  {
    "time": "9/1",
    "price": 10,
    "name": "商品A"
  },
  {
    "time": "9/1",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/2",
    "price": 12,
    "name": "商品A"
  },
  {
    "time": "9/2",
    "price": 32,
    "name": "商品B"
  },
  {
    "time": "9/3",
    "price": 11,
    "name": "商品A"
  },
  {
    "time": "9/3",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/4",
    "price": 15,
    "name": "商品A"
  },
  {
    "time": "9/4",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/5",
    "price": 20,
    "name": "商品A"
  },
  {
    "time": "9/5",
    "price": 42,
    "name": "商品B"
  },
  {
    "time": "9/6",
    "price": 22,
    "name": "商品A"
  },
  {
    "time": "9/6",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/7",
    "price": 21,
    "name": "商品A"
  },
  {
    "time": "9/7",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/8",
    "price": 25,
    "name": "商品A"
  },
  {
    "time": "9/8",
    "price": 31,
    "name": "商品B"
  },
  {
    "time": "9/9",
    "price": 31,
    "name": "商品A"
  },
  {
    "time": "9/9",
    "price": 35,
    "name": "商品B"
  },
  {
    "time": "9/10",
    "price": 32,
    "name": "商品A"
  },
  {
    "time": "9/10",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/11",
    "price": 28,
    "name": "商品A"
  },
  {
    "time": "9/11",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/12",
    "price": 29,
    "name": "商品A"
  },
  {
    "time": "9/12",
    "price": 42,
    "name": "商品B"
  },
  {
    "time": "9/13",
    "price": 40,
    "name": "商品A"
  },
  {
    "time": "9/13",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/14",
    "price": 41,
    "name": "商品A"
  },
  {
    "time": "9/14",
    "price": 38,
    "name": "商品B"
  },
  {
    "time": "9/15",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/15",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/16",
    "price": 50,
    "name": "商品A"
  },
  {
    "time": "9/16",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/17",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/17",
    "price": 38,
    "name": "商品B"
  },
  {
    "time": "9/18",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/18",
    "price": 36,
    "name": "商品B"
  },
  {
    "time": "9/19",
    "price": 50,
    "name": "商品A"
  },
  {
    "time": "9/19",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/20",
    "price": 51,
    "name": "商品A"
  },
  {
    "time": "9/20",
    "price": 29,
    "name": "商品B"
  },
  {
    "time": "9/21",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/21",
    "price": 28,
    "name": "商品B"
  },
  {
    "time": "9/22",
    "price": 60,
    "name": "商品A"
  },
  {
    "time": "9/22",
    "price": 25,
    "name": "商品B"
  },
  {
    "time": "9/23",
    "price": 62,
    "name": "商品A"
  },
  {
    "time": "9/23",
    "price": 28,
    "name": "商品B"
  },
  {
    "time": "9/24",
    "price": 65,
    "name": "商品A"
  },
  {
    "time": "9/24",
    "price": 29,
    "name": "商品B"
  },
  {
    "time": "9/25",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/25",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/26",
    "price": 55,
    "name": "商品A"
  },
  {
    "time": "9/26",
    "price": 40,
    "name": "商品B"
  },
  {
    "time": "9/27",
    "price": 59,
    "name": "商品A"
  },
  {
    "time": "9/27",
    "price": 32,
    "name": "商品B"
  },
  {
    "time": "9/28",
    "price": 52,
    "name": "商品A"
  },
  {
    "time": "9/28",
    "price": 33,
    "name": "商品B"
  },
  {
    "time": "9/29",
    "price": 53,
    "name": "商品A"
  },
  {
    "time": "9/29",
    "price": 34,
    "name": "商品B"
  },
  {
    "time": "9/30",
    "price": 40,
    "name": "商品A"
  },
  {
    "time": "9/30",
    "price": 30,
    "name": "商品B"
  },
  {
    "time": "9/31",
    "price": 45,
    "name": "商品A"
  },
  {
    "time": "9/31",
    "price": 35,
    "name": "商品B"
  }
];

const Line = createG2(chart => {
  chart.line().position('time*price').color('name').shape('spline').size(2);
  chart.render();
});

export default class PriceSilver extends React.Component {

  state= {
      data: data.slice(0, data.length / 2 - 1),
      width: 750,
      height: 250,
      plotCfg: {
        margin: [10, 100, 50, 120],
      }
  }



  render() {
    return (
		<InvestPage title="银价走势">
			<Line
			  data={this.state.data}
			  width={this.state.width}
			  height={this.state.height}
			  plotCfg={this.state.plotCfg}
			/>
		</InvestPage>

    );
  }
  
   changeHandler() {
    this.setState({
      data: data.slice(data.length / 2, data.length - 1),
    });
  }
}