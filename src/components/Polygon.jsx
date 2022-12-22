function Polygon() {
  const polygon = {
    points: '50, 50 350, 50 350, 250 200, 250',
    ry: 100,
    fill: 'silver',
    cx: '50%',
    cy: '50%',
    strokeWidth: 10, //не обязательно
    stroke: 'orange', //не обязательно
  };
  return (
    <>
      <h3>Polygon</h3>
      <svg className="svg">
        <polygon
          points={polygon.points}
          fill={polygon.fill}
          strokeWidth={polygon.strokeWidth}
          stroke={polygon.stroke}
        />
      </svg>
    </>
  );
}
export default Polygon;
