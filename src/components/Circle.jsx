function Circle() {
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
  return (
    <>
      <h2>Circle</h2>
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
    </>
  );
}
export default Circle;
