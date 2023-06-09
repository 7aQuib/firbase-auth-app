import React from 'react'
import styles from './InputControl.module.css'

const InputControl = (props) => {
return (
    <div className={styles.container}>
        {props.label && <lable>{props.label}</lable>}
        <input type="text" {...props} />
    </div>
)
}

export default InputControl
