import QuestionBlock from './QuestionBlock'
import {useState} from 'react'
import QuestionEntryModal from './QuestionEntryModal'
import QuestionColumn from './QuestionColumn'


const Grid = (props) => {
  const multiplier = 1


  let s = 100
  
  const [row, setRow] = useState(5)
  const [col, setCol] = useState(5)

  const startTable = []
  for(let i = 0; i < 5; i++){
    startTable.push([<QuestionColumn rows = {row} setRow = {setRow} multiplier = {multiplier} key = {i} />])
  }

  const [boardCols, setBoardCols] = useState(startTable)
  console.log(boardCols)

  const rowChange = (dir) => {
    if (dir === true){
      setRow(row + 1)
    }
    else {
      setRow(row - 1)
    }
  }


  const colChange = (dir) => {
    if (dir === true){
      setBoardCols( [...boardCols, <QuestionColumn row = {row} setRow = {setRow} multiplier = {multiplier} key = {col}/>] )
      setCol(col + 1)
    }
    else {
      setCol(col - 1)
    }
  }
  

  return (
    <div className = "container question-board">
        {/* <QuestionBlock score = {s} />
        <QuestionBlock score = {s + 100} /> */}
        {boardCols}
        


        
    </div>
  )
}

export default Grid
