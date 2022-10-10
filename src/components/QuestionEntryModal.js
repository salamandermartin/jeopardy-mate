import './component_styles/questionEntry.css'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'



const QuestionEntryModal = (props) => {

  const hideEntryModal = () => {
    props.setShowModal(false)
  }

  return (
    <div className = "questionEntryModalBack">
      <div className = "questionEntryModal" >
        <div className = "modal-header">
            <h2 className = "modal-title">Entry for {props.score} point question here</h2>
        </div>

        <div className = "textEntry">
        
          <span className = "entry">
            <TextField multiline className = "questionEntryBox" minRows={5} placeholder = "Enter your question here"
            value = {props.messageQ} onChange={e => props.handleChangeQ(e.target.value)}  />
           </span>
          <span>
            <TextField multiline className = "answerEntryBox" minRows={5} placeholder = "Enter your answer here" 
              value = {props.messageA} onChange={e => props.handleChangeA(e.target.value)} /> 
          </span>
        </div>

        <div className = "entryModalClose" onClick = {() => hideEntryModal()}>
            <h5>close</h5>
        </div> 
      </div>
    </div>
  )
}

export default QuestionEntryModal
