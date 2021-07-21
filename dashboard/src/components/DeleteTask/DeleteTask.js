import React, { useState } from 'react'
import ResultsViewHOC from '../HOCs/ResultsViewHOC'
import TasksHOC from '../HOCs/TasksHOC'
import SearchBar from '../SearchBar/SearchBar'


const DeleteTask = (props) => {
    const [srcID, setSrcID] = useState(0)

    const onSpinnerChange = (value) => {
        setSrcID(value)
    }

    return(
        <TasksHOC>
            <SearchBar onSpinnerChange={onSpinnerChange} />
            <ResultsViewHOC srcID={srcID} showDel={true}>
            </ResultsViewHOC>
        </TasksHOC>
    )
}

export default DeleteTask