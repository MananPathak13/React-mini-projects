import React, { useState } from 'react'
import Modal from './modal';
import './modal.css'

const ModelTest = () => {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal</button>
            {showModalPopup && (<Modal onClose={onClose} footer={<h1>This is the footer Component</h1>} />)}
        </div>
    )
}

export default ModelTest
