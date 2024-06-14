import React from 'react'
import { useState } from 'react';
import data from './data'
import './styles.css'


const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (id) => {
        setSelected(id === selected ? null : id)
    }

    const handleMultiSelection = (id)=>{
        let cpyMultiple = [...multiple]
        const findIndexofCurrentId = cpyMultiple.indexOf(id)
        if (findIndexofCurrentId ===-1){
            cpyMultiple.push(id)
        }else{
            cpyMultiple.splice(findIndexofCurrentId,1)
        }
        setMultiple(cpyMultiple)
    }
    
  return (
    <div className="wrapper">
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
        <div className='accordian'>
            {
                (data && data.length>0) ?
                    data.map(dataItem =>
                        <div className='item'>
                            <div onClick={enableMultiSelection? ()=>{handleMultiSelection(dataItem.id)}: ()=> handleSingleSelection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>

                            {enableMultiSelection ?
                                multiple.indexOf(dataItem.id)!==-1 && (
                                <div className='content'>{dataItem.answer}</div>
                                ): selected === dataItem.id &&
                                <div className='content'>{dataItem.answer}</div>

                            }
                        </div>
                    ) :
                    <div>No data</div>
            }

        </div>
    </div>
  )
}

export default Accordian