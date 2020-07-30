import React from "react"

const Logo = () => {
  const logoStyle = {
    overflow: "visible",
    position: "relative",
    top: "-.1rem",
    marginRight: "1.9rem",
    fill: "currentColor",
  }

  return (
    <div className="logo-container">
      <a href="/" className="logo-link">
        <svg
          className="logo pdm-logo"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          style={logoStyle}
          viewBox="0 0 472 472"
          width="25px"
          height="25px"
        >
          <defs>
            <clipPath id="_clipPath_F0g9461iddNI66yfkwhvgJ9L6U8slMYe">
              <rect width="472" height="472" />
            </clipPath>
          </defs>
          <g clipPath="url(#_clipPath_F0g9461iddNI66yfkwhvgJ9L6U8slMYe)">
            <rect
              x="0"
              y="0"
              width="272"
              height="472"
              transform="matrix(1,0,0,1,0,0)"
              fill="rgb(0,0,0)"
            />
            <circle
              vectorEffect="non-scaling-stroke"
              cx="272"
              cy="200.0000000000001"
              r="200.0000000000001"
              fill="rgb(0,0,0)"
            />
          </g>
        </svg>
      </a>
    </div>
  )
}

export default Logo
