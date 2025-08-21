import React from 'react'

const Interest = ({data, setData}) => {

    const {interests} = data;
    console.log({interests})
    const handleChange = (e) => {
        setData({...data, interests: e.target.checked ? 
            [...data.interests, e.target.value] : 
            interests.filter(i => i!== e.target.value)
        })
    }
  return (
    <div>
        Interest
        <br/>
        <input 
            type="checkbox" 
            value="coding" 
            onClick={(e)=>handleChange(e)}
            checked={interests.includes("coding")}
        />
        <label>Coding</label>
        <br/>
        <input 
            type="checkbox" 
            value="painting" 
            onClick={(e)=>handleChange(e)}
            checked={interests.includes("painting")}
        />
        <label>Painting</label>
        <br/>
        <input 
            type="checkbox" 
            value="dance" 
            onClick={(e)=>handleChange(e)}
            checked={interests.includes("dance")}
        />
        <label>Dance</label>
        <br/>
        <input 
            type="checkbox" 
            value="music" 
            onClick={(e)=>handleChange(e)}
            checked={interests.includes("music")}
        />
        <label>Music</label>
    </div>
  )
}

export default Interest