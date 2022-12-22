function CircleCssAnimation() {
  const circle = {
    r: 50,
    fill: 'green',
    cx: '50%',
    cy: '50%',
    strokeWidth: 100, //не обязательно
    stroke: 'gold', //не обязательно
  };

  return (
    <>
      <h1>CircleCssAnimation</h1>
      <svg className="svg svg-circle">
        <circle r="100" fill="green" cx="50%" cy="50%" />
        <circle
          className="circle"
          r={circle.r}
          fill={circle.fill}
          cx={circle.cx}
          cy={circle.cy}
          strokeWidth={circle.strokeWidth}
          stroke={circle.stroke}
        />
      </svg>
    </>
  );
}
export default CircleCssAnimation;
