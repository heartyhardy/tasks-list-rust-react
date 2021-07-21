import React from 'react'
import styles from './NotFoundCard.module.css'

const Task = (props) => {
    return (
        <div className={styles.parent}>
            <div className={styles.taskname}><p>► Oops!</p></div>
            <div
                className={styles.warning}>
                <p>Task Not Found!</p>
            </div>
        </div>
    )
}

export default Task