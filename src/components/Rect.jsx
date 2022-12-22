function Rect() {
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
  return (
    <>
      <h3>Rect</h3>
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
    </>
  );
}
export default Rect;
