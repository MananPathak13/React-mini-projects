import React, { useState, useEffect } from 'react'
import './styles.css'

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor]  = useState('hex')
    const [color, setColor] = useState('#000000')


    useEffect(() => {
      if(typeOfColor==="hex") handleCreateRandomHexColor();
      else handleCreateRandomRGBColor()
    }, [typeOfColor])
    
    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }
    const handleCreateRandomHexColor = () =>{
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#";
        for(let i=0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }


    const handleCreateRandomRGBColor = () =>{
        let red = randomColorUtility(101)
        let green = randomColorUtility(101)
        let blue = randomColorUtility(101)
        let rgb = `rgb(${red}%, ${green}%,${blue}%)`
        setColor(rgb)
    }
  return (
    <div className="container" style={{ background: color }}>
    <h2>Type of Color: {typeOfColor}</h2>
    <h3>Color: {color}</h3>
    <button onClick={() => (typeOfColor === 'hex' ? handleCreateRandomHexColor() : setTypeOfColor('hex'))}>Generate Hex Color</button>
    <button onClick={() => (typeOfColor === 'rgb' ? handleCreateRandomRGBColor() : setTypeOfColor('rgb'))}>Generate RGB Color</button>
    {/* <button onClick={() => (typeOfColor === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRGBColor())}>
      Generate Random Color
    </button> */}
  </div>
    
  )
}

export default RandomColor