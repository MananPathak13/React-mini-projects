import React from 'react'
import './modal.css'

const Modal = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || 'Modal'} className='modal'>
            <div className='content'>

                <div className='header'>
                    <span className='close-modal-icon' onClick={() => onClose()}>&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className='body'>
                    {body ? body : (<p>This is the Modal Body</p>)}
                </div>
                <div className='footer'>
                    {footer ? footer : (<h2>Footer component</h2>)}
                </div>
            </div>


        </div>
    )
}

export default Modal
