import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
import EditableTitle from './EditableTitle'

const Header = (props) => {
  return (
    <div>
            <header className = 'header'>
            </header>
          <EditableTitle
            text = {props.title}
            type = "input"
          >
            <TextField
              value = {props.title}
              onChange = {e => props.setTitle(e.target.value)}
            />
          </EditableTitle>
            

    </div>
  )
}

export default Header
