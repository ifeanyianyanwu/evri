const Loading = () => {
  return (
    <div className="inset-0 grid place-content-center fixed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "rgb(255, 255, 255)",
          display: "block",
          shapeRendering: "auto",
        }}
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="17" y="28" width="16" height="44" fill="#1f2937">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="6;28;28"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.21739130434782608s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="88;44;44"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.21739130434782608s"
          ></animate>
        </rect>
        <rect x="42" y="28" width="16" height="44" fill="#1f2937">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="11.5;28;28"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.10869565217391304s"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="77;44;44"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.10869565217391304s"
          ></animate>
        </rect>
        <rect x="67" y="28" width="16" height="44" fill="#1f2937">
          <animate
            attributeName="y"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="11.5;28;28"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
          <animate
            attributeName="height"
            repeatCount="indefinite"
            dur="1.0869565217391304s"
            calcMode="spline"
            keyTimes="0;0.5;1"
            values="77;44;44"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
          ></animate>
        </rect>
      </svg>
    </div>
  );
};

export default Loading;
