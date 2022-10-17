import {useState} from 'react'

const EditableTitle = (props) => {
    const [editing, setEditing] = useState(false)

    return (
        <div>
            {editing ? (
                <div onBlur = {() => setEditing(false)}>
                    {props.children}
                </div>
            ) : (
                <div onClick = {() => setEditing(true)}>
                    <h1>{props.text || props.placeholder || "Editable Title"}</h1>
                </div>
            ) 
            }

        </div>
    )
    }

export default EditableTitle