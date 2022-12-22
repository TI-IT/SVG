function Polyline() {
  const polyline = {
    points: '50, 50 50, 150 150, 150 150, 50 250, 50 350, 250',
    stroke: 'orange',
    fill: 'none',
    strokeWidth: 20,
    strokeLinejoin: 'round', //скругление углов
    strokeLinecap: 'round', //скругление углов
  };
  return (
    <>
      <h2>Polyline</h2>
      <svg className="svg">
        <polyline
          className="polyline"
          points={polyline.points}
          stroke={polyline.stroke}
          fill={polyline.fill}
          strokeWidth={polyline.strokeWidth}
          strokeLinejoin={polyline.strokeLinejoin}
          strokeLinecap={polyline.strokeLinecap}
        />
      </svg>
    </>
  );
}
export default Polyline;
