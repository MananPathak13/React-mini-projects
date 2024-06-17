import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import "./styles.css";

const QrCodeGenerator = () => {

    const [input, setInput] = useState("")
    const [generateCode, setGenerateCode] = useState("")

    const handleGenerateCode = (value) => {
        setGenerateCode(value)
    }
    return (
        <div className='container'>
            <h1>QR code generator</h1>
            <div className='qr-input'>
                <input type="text" name="qr-code" placeholder='Enter Something' onChange={(e) => setInput(e.target.value)} />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={() => handleGenerateCode(input)}>Submit</button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={generateCode} size={400} bgColor='#fff' />
            </div>

        </div>
    )
}

export default QrCodeGenerator
