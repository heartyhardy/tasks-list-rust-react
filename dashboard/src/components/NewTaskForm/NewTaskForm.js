import React from 'react'
import styles from './NewTaskForm.module.css'

const Task = ({onTextChange, onPost}) => {
    return (
        <div className={styles.parent}>
            <div className={styles.taskname}><p>► Task Name: </p></div>
            <div className= {styles.inner_parent}>
                <input
                className={styles.textfield} 
                id="newtasknametxt" 
                autoComplete={false}
                onChange={(e) => {onTextChange(e.target.value)}}
                />
                <input
                className={styles.button}
                 type="button"
                 value="Save"
                 onClick={() => {onPost()}}/>
            </div>
        </div>
    )
}

export default Task