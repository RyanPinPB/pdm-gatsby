import React from "react"
import { theme } from "@chakra-ui/core"

const customIcons = {
  logo: {
    className: "testing",
    path: (
      <g fill="currentColor">
        <rect className="logo-rect" x="0" y="0" width="272" height="472" />
        <circle className="logo-circle" cx="272" cy="200" r="200" />
      </g>
    ),
    viewBox: "0 0 472 472",
  },
}

const customTheme = {
  ...theme,
  // breakpoints: ["30em", "48em", "62em", "80em", "1525px"],
  colors: {
    ...theme.colors,
    brand: {
      900: "var(--white)",
      800: "var(--blueLight)",
      700: "var(--greyThree)",
      600: "var(--greyTwo)",
      500: "var(--grey)",
      400: "var(--blackFour)",
      300: "var(--blackThree)",
      200: "var(--blackTwo)",
      100: "var(--black)",
    },
  },
  icons: {
    ...theme.icons,
    ...customIcons,
  },
}

export default customTheme

// export default {
//   breakpoints: ["30em", "48em", "62em", "80em"],
//   fonts: {
//     heading: '"Poppins", sans-serif',
//     body: "system-ui, sans-serif",
//     mono: "Menlo, monospace",
//   },
//   fontSizes: {
//     xs: "0.75rem",
//     sm: "0.875rem",
//     md: "1rem",
//     lg: "1.125rem",
//     xl: "1.25rem",
//     "2xl": "1.5rem",
//     "3xl": "1.875rem",
//     "4xl": "2.25rem",
//     "5xl": "3rem",
//     "6xl": "4rem",
//   },
// }
