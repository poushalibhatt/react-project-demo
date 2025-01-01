import React,{useContext} from 'react'
import { useTheme, useUpdateTheme } from './ThemeContext';

const FunctionalComponent = () => {
    const darkTheme = useTheme()
    const handleToggle = useUpdateTheme()
    const themeStyle = {
        backgroundColor: darkTheme? "#ccc" : "#333",
        color: darkTheme? "#333": "#ccc",
        margin: "15px",
        padding: "20px"
    }
  return (
    <>
        <button onClick={handleToggle}>Toggle theme</button>
        <div style={themeStyle}>FunctionalComponent</div>
    </>
    
  )
}

export default FunctionalComponent