import QuestionEntryModal from './QuestionEntryModal'
import {useState} from 'react'


const QuestionBlock = ( props ) => {
  const [showModal, setShowModal] = useState(false)

  const showEntryModal = () => {
    setShowModal(true)
  }

  const [messageQ, setMessageQ] = useState('')
  const [messageA, setMessageA] = useState('')

  const handleChangeQ = (newVal) => {
    setMessageQ(newVal)
    props.handleQColValues(props.in, messageQ, messageA)
  }
  const handleChangeA = (newVal) => {
    setMessageA(newVal)
    props.handleQColValues(props.in, messageQ, messageA)
  }

  return (
    <div className = "question" style = {{cursor: 'pointer'}}>
      <div onClick = {() => showEntryModal()}>
        <h3> {props.score} </h3>
      </div>
      {showModal ? <QuestionEntryModal showModal = {showModal} setShowModal = {setShowModal}
       score = {props.score} messageQ = {messageQ} messageA = {messageA} handleChangeA = {handleChangeA} handleChangeQ = {handleChangeQ}/> :<></>}
    </div>
  )
}

export default QuestionBlock
