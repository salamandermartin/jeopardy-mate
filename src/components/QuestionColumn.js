import React, { useState } from 'react'
import QuestionBlock from './QuestionBlock'
import { TextField } from '@mui/material'

const QuestionColumn = ( props ) => {

    let qCol = []
    let s = 100
    const iniQCol = new Array(props.rows)
    const [qColValues, setqColValues] = useState(iniQCol)
    const [categoryTitle, setCategoryTitle] = useState('')

    const handleQColValues = (index, newQM, newAM) => {
        let ret = qColValues
        ret[index] = {"question": newQM, "answer": newAM}
        setqColValues(ret)
        props.saveQA(props.inM, qColValues)
    }


    for (let i = 0; i < props.rows; i++){
        qCol.push( <QuestionBlock score = {s * props.multiplier} qColValues = {qColValues} setqColValues = {setqColValues} handleQColValues = {handleQColValues}  key = {i} in = {i}/>)
        s += 100
    }

    const handleCatTitle = (newVal) => {
        setCategoryTitle(newVal)
    }



  return (
    <div>
        <TextField
            onChange={e => handleCatTitle(e.target.value)}
        />

      {qCol}
    </div>
  )
}

export default QuestionColumn
