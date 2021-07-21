import React, { useState } from 'react'
import ResultsViewHOC from '../HOCs/ResultsViewHOC'
import TasksHOC from '../HOCs/TasksHOC'
import SearchBar from '../SearchBar/SearchBar'


const GetTask = ({tasks}) => {

    const [srcID, setSrcID] = useState(0)

    const onSpinnerChange = (value) => {
        setSrcID(value)
    }

    return(
        <TasksHOC>
            <SearchBar onSpinnerChange={onSpinnerChange} />
            <ResultsViewHOC srcID={srcID}>
            </ResultsViewHOC>
        </TasksHOC>
    )
}

export default GetTask