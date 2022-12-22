function Line() {
  const line = {
    x1: 50,
    y1: 50,
    x2: 350,
    y2: 250,
    stroke: 'black',
    strokeWidth: 10, //не обязательно
  };
  return (
    <>
      <h3>Line</h3>
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
    </>
  );
}
export default Line;
