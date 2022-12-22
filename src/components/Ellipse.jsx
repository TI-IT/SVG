function Ellipse() {
  const ellipse = {
    rx: 50,
    ry: 100,
    fill: 'blue',
    cx: '50%',
    cy: '50%',
    strokeWidth: 10, //не обязательно
    stroke: 'orange', //не обязательно
  };
  return (
    <>
      <h3>Ellipse</h3>
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
    </>
  );
}
export default Ellipse;
