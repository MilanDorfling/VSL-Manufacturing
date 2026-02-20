import React from "react";

const FooterSVG = ({ className = "", style = {} }) => (
  <svg
    viewBox="0 0 1600 200"
    width="100%"
    height="100%"
    className={className}
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <linearGradient id="footerTextGradient" x1="0" y1="1" x2="0" y2="0.3" gradientUnits="objectBoundingBox">
        <stop offset="10%" stopColor="#00afef" stopOpacity="1" />
        <stop offset="100%" stopColor="#49494c" stopOpacity="1" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="'Nulshock Bd', 'Arial', sans-serif"
      fontWeight="900"
      fontSize="120"
      fill="url(#footerTextGradient)"
      opacity="0.35"
      letterSpacing="-8"
    >
      VSL MANUFACTURING
    </text>
  </svg>
);

export default FooterSVG;
