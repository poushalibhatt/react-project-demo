import React, {useState} from 'react'
import Profile from './profile'
import Interest from './interest'
import Settings from './settings'
import './form.css';

const MultistepForm = () => {

    const [activeTab, setActiveTab] = useState(0)
    const [data, setData] = useState({
        name: "",
        age: "",
        interests: ["music"],
        theme: "dark"
    })

    const tabs = [
        {name: "Profile", component: Profile},
        {name: "Interests", component: Interest},
        {name: "Settings", component: Settings}
    ]
    
    const handlePrev = () => {
        setActiveTab(prev => prev-1)
    }
    const handleNext = () => {
        setActiveTab(prev => prev+1)
    }
    const handleSubmit = () => {
        alert(data.name)
        console.log({data})
    }

    const ActiveTab = tabs[activeTab].component
  return (
    <div>
        <div className='tab-group'>
            {tabs.map((tab, index) => <span 
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className='tabs'
            >
                    {tab.name}
                </span>
            )}
        </div>
        <ActiveTab data={data} setData={setData}/>
        <div className='btn-group'>
            {activeTab >0 && <button onClick={handlePrev}>Prev</button>}
            {activeTab <tabs.length-1 && <button onClick={handleNext}>Next</button>}
            {activeTab === tabs.length-1 && <button onClick={handleSubmit}>Submit</button>}
        </div>
    </div>
  )
}

export default MultistepForm