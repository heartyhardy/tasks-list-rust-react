import React from 'react';
import styles from './TasksHOC.module.css';

const TasksHOC = (contents) => {
    return(
        <div  className={styles.parent}>
            <React.Fragment>
                {contents.children}
            </React.Fragment>
        </div>
    )
}

export default TasksHOC