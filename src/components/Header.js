import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div>
        <h1 className = 'title'>{props.title}</h1>
            <header className = 'header'>
            </header>

    </div>
  )
}

export default Header
