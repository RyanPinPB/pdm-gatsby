import React from "react"

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
    let dark = !this.state.dark
    localStorage.setItem("dark", JSON.stringify(dark))
    this.setState({ dark })
  }
  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"))
    if (lsDark) {
      this.setState({ dark: lsDark })
    } else if (supportsDarkMode()) {
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
        {children}
      </ThemeContext.Provider>
    )
  }
}
export default ThemeContext
export { ThemeProvider }

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
