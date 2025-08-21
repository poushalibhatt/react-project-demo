import React from 'react'

const Settings = ({data, setData}) => {

    const {theme} = data
    const handleClick = (e) => {
        setData({...data, theme: e.target.value})
    }
  return (
    <div>
        Settings
        <br/>
        <input 
        type="radio" 
        value="dark" 
        checked={theme === "dark"}
        onClick={(e) => handleClick(e)} 
        />
        <label>Dark</label>
        <br/>
        <input 
        type="radio" 
        value="light" 
        checked={theme === "light"}
        onClick={(e) => handleClick(e)} 
        />
        <label>Light</label>
    </div>
  )
}

export default Settings