import React,{useState, createContext, useContext} from 'react'

export const ThemeContext = createContext()
export const ThemeUpdateContext = createContext()

export const useTheme = () => {
   return useContext(ThemeContext)
}
export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext)
}
const ThemeProvider = ({children}) => {

    const [darkTheme, setDarkTheme] = useState(false)
    
    const handleToggle = () => {
    setDarkTheme(prev => !prev)
    }

  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={handleToggle}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider