import React from "react"
import { ColorModeProvider } from "@chakra-ui/core"

//dont have to use this file if we use Chakra UI

const defaultState = {
  dark: false,
  toggleDark: () => {},
}
const ThemeContext = React.createContext(defaultState)
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true
class ThemeProvider extends React.Component {
  state = {
    dark: false,
  }
  toggleDark = () => {
    console.log("ThemeContext.js: toggle dark/light mode")
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }
  componentDidMount() {
    // Getting dark mode value from localStorage!
    console.log(this.state.dark)
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      console.log("ThemeContext.js: lsDark: " + lsDark)
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
      console.log("ThemeContext.js:  supports Dark Mode: true")
      this.setState({ dark: true })
    }
  }
  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        <ColorModeProvider>{children}</ColorModeProvider>
      </ThemeContext.Provider>
    )
  }
}
export default ThemeContext
export { ThemeProvider }

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
