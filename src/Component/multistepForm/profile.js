import React from 'react'

const Profile = ({data, setData}) => {
    const {name, age} = data

    const handleChange = (e, item) => {
        setData({...data, [item] : e.target.value})
    }
    console.log(name)
  return (
    <div>
        Profile
        <br/>
        <label>Name</label>
        <input value={name} name="name" onChange={(e) => handleChange(e, "name")}/>
        <br/>
        <label>Age</label>
        <input value={age} name="age" onChange={(e) => handleChange(e, "age")}/>

    </div>
  )
}

export default Profile