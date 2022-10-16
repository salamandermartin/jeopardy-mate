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
                    {props.text || props.placeholder || "Editable Title"}
                </div>
            ) 
            }

        </div>
    )
    }

export default EditableTitle