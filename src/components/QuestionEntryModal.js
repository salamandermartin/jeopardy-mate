import './component_styles/questionEntry.css'
import { TextField } from '@mui/material'


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

        {/* <div className = "text-entry">
          <textarea rows = "4">
            Enter Question Here
          </textarea>

          <textarea rows = "4">
            Enter Answer Here
          </textarea>
        </div> */}

        <div className = "textEntry">
          <span className = "entry"><TextField multiline className = "questionEntryBox" minRows={5}/> </span>
          <span><TextField multiline className = "answerEntryBox" minRows={5} /> </span>
        </div>

        <div className = "entryModalClose" onClick = {() => hideEntryModal()}>
            <h5>close</h5>
        </div> 
      </div>
    </div>
  )
}

export default QuestionEntryModal
