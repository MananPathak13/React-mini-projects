import React from 'react'
import Tabs from './tabs';
import "./tabs.css"



function RandomComponent() {
    return <div>Some Random Component</div>
}

const tabs = [
    {
        label: "Tab 1",
        content: <div>This is content for Tab 1</div>,
    },
    {
        label: "Tab 2",
        content: <div>This is content for Tab 2</div>,
    },
    {
        label: "Tab 3",
        content: <RandomComponent />,
    },
];
const TabTest = () => {
    return (
        <Tabs tabsContent={tabs} />
    )
}

export default TabTest
