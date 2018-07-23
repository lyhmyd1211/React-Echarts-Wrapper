import React from 'react';
import Test from './test.jsx';
// import Echarts from "../../";
import { render } from 'react-dom';

var element = document.createElement("div");
document.body.appendChild(element);
render(
  <div className="test">
    <Test/>
  </div>,
  element
);