import React from 'react';
import styles from './TasksHOC.module.css';

const TasksHOC = (contents) => {
    return(
        <div  className={styles.parent}>
            <>
                {contents.children}
            </>
        </div>
    )
}

export default TasksHOC