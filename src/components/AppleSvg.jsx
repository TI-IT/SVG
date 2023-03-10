// import '../images/image.JPG';

function AppleSvg() {
  return (
    <>
      <h1>Apple</h1>
      <img className="image" src={require('../images/image.JPG')} alt="" />
      <svg
        className="apple"
        width="1"
        height="1"
        viewBox="0 0 1 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="apple" clipPathUnits="objectBoundingBox">
          <path
            className="apple-path"
            d="M0.5 0.21875C0.480357 0.21875 0.464286 0.204688 0.464286 0.1875V0.15625C0.464286
             0.0699219 0.544196 0 0.642857 0H0.678571C0.698214 0 0.714286 0.0140625 0.714286
              0.03125V0.0625C0.714286 0.148828 0.634375 0.21875 0.535714 0.21875H0.5ZM0 0.5625C0
               0.413477 0.0796875 0.25 0.25 0.25C0.310938 0.25 0.383259 0.270117 0.434598
                0.287695C0.476563 0.301953 0.523661 0.301953 0.565625 0.287695C0.616741 0.270313
                  0.689286 0.25 0.750223 0.25C0.920536 0.25 1.00022 0.413477 1.00022 0.5625C1.00022
                   0.8125 0.821652 1 0.64308 1C0.60625 1 0.558036 0.987109 0.528125 0.97793C0.510045
                    0.972461 0.490402 0.972461 0.472321 0.97793C0.442411 0.987109 0.394196 1 0.357366
          1C0.178571 1 0 0.8125 0 0.5625Z"
          />
        </clipPath>
      </svg>
    </>
  );
}

export default AppleSvg;
