import React from 'react';
import '../css/style.css';
function Svg() {
  const rect = {
    width: 200,
    height: 150,
    fill: 'red',
    x: 10,
    y: 10,
    rx: 10, // Округляет со всех сторон если ry не указан
    ry: 10, //не обязательно
    strokeWidth: 10, //не обязательно
    stroke: 'orange', //не обязательно
  };

  const circle = {
    r: 100,
    fill: 'red',
    cx: '50%',
    cy: '50%',
    strokeWidth: 100, //не обязательно
    stroke: 'gold', //не обязательно
    strokeDasharray: '20 10', //не обязательно Пунктир
    strokeDashoffset: '10', //не обязательно  Пунктир сдвинуть
  };

  const ellipse = {
    rx: 50,
    ry: 100,
    fill: 'blue',
    cx: '50%',
    cy: '50%',
    strokeWidth: 10, //не обязательно
    stroke: 'orange', //не обязательно
  };

  const polygon = {
    points: '50, 50 350, 50 350, 250 200, 250',
    ry: 100,
    fill: 'silver',
    cx: '50%',
    cy: '50%',
    strokeWidth: 10, //не обязательно
    stroke: 'orange', //не обязательно
  };

  const line = {
    x1: 50,
    y1: 50,
    x2: 350,
    y2: 250,
    stroke: 'black',
    strokeWidth: 10, //не обязательно
  };

  const polyline = {
    points: '50, 50 50, 150 150, 150 150, 50 250, 50 350, 250',
    stroke: 'orange',
    fill: 'none',
    strokeWidth: 10,
  };

  return (
    <>
      <h1>SVG</h1>
      <div className="box">
        <svg className="svg">
          <rect
            width={rect.width}
            height={rect.height}
            fill={rect.fill}
            x={rect.x}
            y={rect.y}
            rx={rect.rx}
            ry={rect.ry}
            strokeWidth={rect.strokeWidth}
            stroke={rect.stroke}
          />
        </svg>
        <svg className="svg">
          <rect width="300" height="200" fill="gold" x="10" y="10" rx="20" ry="20" />
        </svg>
        <svg className="svg">
          <circle
            r={circle.r}
            fill={circle.fill}
            strokeWidth={circle.strokeWidth}
            stroke={circle.stroke}
          />
        </svg>
        <svg className="svg">
          <circle
            r={circle.r}
            fill={circle.fill}
            cx={circle.cx}
            strokeWidth={circle.strokeWidth}
            stroke={circle.stroke}
          />
        </svg>
        <svg className="svg">
          <circle
            r={circle.r}
            fill={circle.fill}
            cx={circle.cx}
            cy={circle.cy}
            strokeWidth={circle.strokeWidth}
            stroke={circle.stroke}
            strokeDasharray={circle.strokeDasharray}
            strokeDashoffset={circle.strokeDashoffset}
          />
        </svg>
        <svg className="svg">
          <ellipse
            rx={ellipse.rx}
            ry={ellipse.ry}
            fill={ellipse.fill}
            cx={ellipse.cx}
            cy={ellipse.cy}
            strokeWidth={ellipse.strokeWidth}
            stroke={ellipse.stroke}
          />
        </svg>
        <svg className="svg">
          <polygon
            points={polygon.points}
            fill={polygon.fill}
            strokeWidth={polygon.strokeWidth}
            stroke={polygon.stroke}
          />
        </svg>
        <svg className="svg">
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.stroke}
            strokeWidth={line.strokeWidth}
          />
        </svg>
        <svg className="svg">
          <polyline
            points={polyline.points}
            stroke={polyline.stroke}
            fill={polyline.fill}
            strokeWidth={polyline.strokeWidth}
          />
        </svg>
        <svg className="svg">
          <svg
            width="200"
            height="440"
            viewBox="0 0 382 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 220C-0.666706 160.333 -27.2579 86.1495 56 22C117 -25 230.038 14.7683 278 66C322 113 354.768 157.489 373 220C394 292 373 358.73 327 404C290 440.413 200 446.8 164 432C138 421.311 43 388 56 292C73.1261 165.53 196 140 230 169"
              stroke="black"
            />
          </svg>
        </svg>
        <svg className="svg">
          <svg width="300" height="440" viewBox="0 0 382 440">
            <text className="text">Tigra</text>
          </svg>
        </svg>
        <svg className="svg-text">
          <svg
            width="200"
            height="440"
            viewBox="0 0 382 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path"
              d="M36 220C-0.666706 160.333 -27.2579 86.1495 56 22C117 -25 230.038 14.7683 278 66C322 113 354.768 157.489 373 220C394 292 373 358.73 327 404C290 440.413 200 446.8 164 432C138 421.311 43 388 56 292C73.1261 165.53 196 140 230 169"
              stroke="transparent"
            />
            <text className="text">
              <textPath href="#path">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas, quos
                error officiis, quam dol
              </textPath>
            </text>
          </svg>
        </svg>
      </div>
    </>
  );
}
export default Svg;
