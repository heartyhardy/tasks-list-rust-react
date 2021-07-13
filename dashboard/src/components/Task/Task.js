import React from 'react'
import styles from './Task.module.css'

const Task = ({ taskName, taskStatus }) => {
    return (
        <div className={styles.parent}>
            <div className={styles.taskname}><p>► {taskName}</p></div>
            <div
             className={`${styles.task_status} ${taskStatus ? styles.completed : styles.pending}`}>
                 <p>{taskStatus? `Completed`: `Pending`}</p>
            </div>
        </div>
    )
}

export default Task