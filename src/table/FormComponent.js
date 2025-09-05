import React from 'react'

const FormComponent = ({phoneData, phoneList, setPhoneData, setPhoneList}) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        setPhoneData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = () => {
        setPhoneList([...phoneList, phoneData])
        setPhoneData({})
    }
    let isValidate = Object.values(phoneData).some(list => list.trim() === "")
    console.log({isValidate})

  return (
    <form>
        <div>
            <label>First Name</label>
            <input 
                name="firstname" 
                type="text" 
                value={phoneData.firstname}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Last Name</label>
            <input name="lastname" type="text" value={phoneData.lastname} onChange={handleChange}/>
        </div>
        <div>
            <label>Phone</label>
            <input name="phone" type="text" value={phoneData.phone} onChange={handleChange}/>
        </div>
        <input 
            type="button"
            value="Submit"
            style={{backgroundColor: !isValidate ? "green" : "grey", color: "#ffff"}}
            disabled={false}
            onClick={handleSubmit}
        />
    </form>
  )
}

export default FormComponent 