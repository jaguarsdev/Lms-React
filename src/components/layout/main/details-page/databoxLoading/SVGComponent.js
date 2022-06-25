import * as React from "react";

const SVGComponent = (props) => (
  <svg className="spinner" viewBox="0 0 50 50" {...props}>
    <circle
      className="path"
      cx={25}
      cy={25}
      r={20}
      fill="none"
      strokeWidth={5}
    />
  </svg>
);

export default SVGComponent;
