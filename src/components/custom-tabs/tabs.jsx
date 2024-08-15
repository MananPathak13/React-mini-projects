import React, { useState } from 'react'
import "./tabs.css"

const Tabs = ({ tabsContent }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(-1)


    const handleChange = (index) => {
        setCurrentTabIndex(index)
    }
    return (
        <div className='wrapper'>
            <div className='heading' >
                {
                    tabsContent.map((tabItem, index) =>
                        <div
                            className={`tab-item ${currentTabIndex === index ? "active" : ""}`} key={tabItem.label} onClick={() => handleChange(index)}>
                            <span className='label' >{tabItem.label}</span>
                        </div>)
                }
            </div>
            <div className='content' style={{ color: "red" }}>
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs
