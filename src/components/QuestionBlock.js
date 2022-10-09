import QuestionEntryModal from './QuestionEntryModal'
import {useState} from 'react'


const QuestionBlock = ( props ) => {
  const [showModal, setShowModal] = useState(false)

  const showEntryModal = () => {
    setShowModal(true)
  }

  return (
    <div className = "question" style = {{cursor: 'pointer'}}>
      <div onClick = {() => showEntryModal()}>
        <h3> {props.score} </h3>
      </div>
      {showModal && <QuestionEntryModal showModal = {showModal} setShowModal = {setShowModal} score = {props.score}/>}
    </div>
  )
}

export default QuestionBlock
