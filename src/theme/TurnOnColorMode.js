import React from "react"
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core"
import customTheme from "./theme"

export default function TurnOnColorMode({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  )
}

// alternative dark mode
// import { useEffect, useState } from 'react';

// export const useDarkMode = () => {
//   const [theme, setTheme] = useState('light');
//   const [componentMounted, setComponentMounted] = useState(false);
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       window.localStorage.setItem('theme', 'dark');
//       setTheme('dark');
//     } else {
//       window.localStorage.setItem('theme', 'light');
//       setTheme('light');
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme');
//     if (localTheme) {
//       setTheme(localTheme);
//     } else {
//       setTheme('light')
//       window.localStorage.setItem('theme', 'light')
//     }
//     setComponentMounted(true);
//   }, []);

//   return [theme, toggleTheme, componentMounted]
// };
