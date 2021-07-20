import React, { useState } from 'react'
import EditTaskForm from '../EditTaskForm/EditTaskForm'
import TasksHOC from '../HOCs/TasksHOC'
import SearchBar from '../SearchBar/SearchBar'


const PatchTask = (props) => {

    const [srcID, setSrcID] = useState(0)

    const onSpinnerChange = (value) => {
        setSrcID(value)
    }

    return (
        <TasksHOC>
            <SearchBar onSpinnerChange={onSpinnerChange} />
            <EditTaskForm
                srcID={srcID}
                key={0}
                taskName={"Some Task"}
                taskStatus={true}
            />
        </TasksHOC>
    )
}

export default PatchTask