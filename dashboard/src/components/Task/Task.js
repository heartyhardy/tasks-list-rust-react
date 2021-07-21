import React from 'react'
import styles from './Task.module.css'

const Task = ({ id ,taskName, taskStatus, showDel, deleteTask }) => {
    return (
        <div className={styles.parent}>
            <div className={`${!showDel ? null : styles.inner_parent}`}>
                <div className={styles.taskname}><p>► {taskName}</p></div>
                <div
                    className={`${styles.task_status} ${taskStatus ? styles.completed : styles.pending}`}>
                    <p>{taskStatus ? `Completed` : `Pending`}</p>
                </div>
                {showDel ? <input
                    className={styles.button}
                    type="button"
                    value="Delete"
                    onClick={() => {
                        deleteTask(id)
                    }} /> : null}
            </div>
        </div>
    )
}

export default Task