import QuestionBlock from './QuestionBlock'
import {useState} from 'react'
import QuestionEntryModal from './QuestionEntryModal'
import QuestionColumn from './QuestionColumn'
import { TextField } from '@mui/material'
import './component_styles/grid.css'


const Grid = (props) => {
  const multiplier = 1

  let s = 100
  
  const [row, setRow] = useState(5)
  const [col, setCol] = useState(5)

  const [questions, setQuestions] = useState([])

  const startTable = []
  for(let i = 0; i < 5; i++){
    startTable.push(<QuestionColumn rows = {row} setRow = {setRow} multiplier = {multiplier} key = {i} />)
  }
  const [boardCols, setBoardCols] = useState(startTable)

  const rowChange = (newVal) => {
    if (newVal >= 1 && newVal <= 10){
      const ret = []
      for (let i = 0; i < col; i++){
        ret.push(<QuestionColumn rows = {newVal} setRow = {setRow} multiplier = {multiplier} key = {i} />)
      }
      setBoardCols(ret)
      setRow(newVal)
    }
  }


  const colChange = (newVal) => {
    if (newVal >= 1 && newVal <= 10){
      const ret = []
      for (let i = 0; i < newVal; i++){
        ret.push(<QuestionColumn rows = {row} setRow = {setRow} multiplier = {multiplier} key = {i}/>)
      }
      setBoardCols(ret)
      setCol(newVal)
    }
  }
  

  return (
    <div>
      <div className = "container question-board">
          {boardCols}
      </div>

      <div id = "colRowChanger">
          <TextField
            label = "rows"
            type = "number"
            InputLabelProps={
              {shrink:true,}
            }
            value = {row}
            onChange={e => rowChange(e.target.value)}
          />

          <TextField
            label = "columns"
            type = "number"
            InputLabelProps={
              {shrink:true,}
            }
            value = {col}
            onChange={e => colChange(e.target.value)}
          />
      </div>
    </div>
  )
}

export default Grid
