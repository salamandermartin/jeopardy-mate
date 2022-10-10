import './component_styles/questionEntry.css'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'



const QuestionEntryModal = (props) => {

  const [messageQ, setMessageQ] = useState('dsadasds')
  const [messageA, setMessageA] = useState('')

  const hideEntryModal = () => {
    props.setShowModal(false)
  }

  function handleChangeQ(e) {
    setMessageQ(e.target.value)
    console.log('hi')
  }
  function handleChangeA(e) {
    setMessageA(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className = "questionEntryModalBack">
      <div className = "questionEntryModal" >
        <div className = "modal-header">
            <h2 className = "modal-title">Entry for {props.score} point question here</h2>
        </div>

        <div className = "textEntry">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          autoComplete="off"
        >

          <span className = "entry">
            <TextField multiline className = "questionEntryBox" minRows={5} placeholder = "Enter your question here"
            value = {messageQ} onChange={e => setMessageQ(e.target.value)}  />
           </span>
          <span>
            <TextField multiline className = "answerEntryBox" minRows={5} placeholder = "Enter your answer here" 
             onChange={handleChangeA} value = {messageA} /> 
          </span>
        </Box>
        </div>

        <div className = "entryModalClose" onClick = {() => hideEntryModal()}>
            <h5>close</h5>
        </div> 
      </div>
    </div>
  )
}

export default QuestionEntryModal
