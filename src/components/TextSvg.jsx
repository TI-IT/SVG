function TextSvg() {
  return (
    <div>
      <h2>TextSvg</h2>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas, quos error
              officiis, quam dol
            </textPath>
          </text>
        </svg>
      </svg>
    </div>
  );
}
export default TextSvg;
