import React from 'react';
import '../css/style.css';
import Rect from './Rect';
import Circle from './Circle';
import Ellipse from './Ellipse';
import Polygon from './Polygon';
import Line from './Line';
import Polyline from './Polyline';
import TextSvg from './TextSvg';
import RectCssAnimation from './RectCssAnimation';
import CircleCssAnimation from './CircleCssAnimation';
import AppleSvg from './AppleSvg';

function Svg() {
  return (
    <>
      <h1>SVG</h1>
      <div className="box">
        <AppleSvg />
        <RectCssAnimation />
        <CircleCssAnimation />
        <Circle />
        <Rect />
        <Ellipse />
        <Polygon />
        <Line />
        <Polyline />
        <h2>TTT</h2>
        <svg className="svg">
          <Circle />
          <Rect />
        </svg>
        <TextSvg />
      </div>
    </>
  );
}
export default Svg;
