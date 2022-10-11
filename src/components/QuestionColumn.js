import React, { useState } from 'react'
import QuestionBlock from './QuestionBlock'
import { TextField } from '@mui/material'

const QuestionColumn = ( props ) => {

    let qCol = []
    let s = 100
    for (let i = 0; i < props.rows; i++){
        qCol.push( <QuestionBlock score = {s * props.multiplier} key = {i}/>)
        s += 100
    }

    // const [questionCount, setQuestionCount] = useState()
    const [categoryTitle, setCategoryTitle] = useState('')

    const handleCatTitle = (newVal) => {
        setCategoryTitle(newVal)
    }

  return (
    <div>
        <h2>{categoryTitle}</h2>
      {qCol}
    </div>
  )
}

export default QuestionColumn
