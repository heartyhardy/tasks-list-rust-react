import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './EditTaskForm.module.css'


const EditTaskForm = ({ srcID, taskStatus }) => {

    const [checkedChanged, setCheckedChanged] = useState(false)
    const [textChanged, setTextChanged] = useState(false)
    const [isChecked, setChecked] = useState(taskStatus)
    const [newTaskName, setNewTaskName] = useState("")
    const [isPatchDisabled, setPatchDisabled] = useState(true)

    const [apiResponse, setApiResponse] = useState({
        isLoading: true,
        response: null
    })

    useEffect(() => {
        async function getData(){         
            
            if(!srcID || srcID<0){
                setChecked(false)
                setPatchDisabled(true)
                return
            }

            const tasks_api = `http://127.0.0.1:8080/tasks/${Math.abs(srcID)}`

            const response = await axios.get(tasks_api)
            const data = await response.data

            if(data){
                setPatchDisabled(false)
            }else{
                setPatchDisabled(true)
            }

            setApiResponse({isLoading:false, response: data})
            setCheckedChanged(false)
            setTextChanged(false)
        }
        getData()
        
    },[srcID])

    const onCheckboxChecked = (checked) => {
        if(!checkedChanged){
            setCheckedChanged(true)
        }
        
        setChecked(checked)
    }

    const onTextChange = (value) => {
        
        if(value === ""){
            setPatchDisabled(true)
        }else if(isPatchDisabled){
            setPatchDisabled(false)
        }
        
        if(!value.match(/^[ A-Za-z]+$/)){
            setNewTaskName("")
            return
        }
        
        setNewTaskName(value)
        setTextChanged(true)
    }

    const onPatch = (completed, newtask) => {
        
        if(!apiResponse.response){
            return
        }

        let patchData = {id: apiResponse.response.id}
        
        if(newtask){
            patchData = {...patchData, ...{name: newTaskName}}
        }
        if(completed){
            patchData = {...patchData, ...{completed: isChecked}}
        }

        const tasks_api = `http://127.0.0.1:8080/tasks`

        async function patchTask(){
            setPatchDisabled(true)
            let response = await axios.patch(tasks_api, patchData)
            let data = await response.data

            //TODO Error Handling (data must return true from endpoint)
            setPatchDisabled(false)
        }

        patchTask()        
    }

    return (
        <div className={styles.parent}>
            <div className={styles.inner_parent}>
                <div className={styles.taskname}><p>► Task Name: </p></div>

                <input
                    className={styles.textfield}
                    id="edittasknametxt"
                    value={!textChanged && apiResponse.response ? apiResponse.response.name: newTaskName}
                    onChange={(e) => { onTextChange(e.target.value) }}
                />

                <div className={styles.taskname}><p>► Completed? </p></div>

                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={!checkedChanged && apiResponse.response ? apiResponse.response.completed : isChecked}
                    onChange = {(e) => {onCheckboxChecked(e.target.checked)}} />

            </div>
            <div>
                <input
                    className={styles.button}
                    type="button"
                    value="Save"
                    disabled={isPatchDisabled}
                    onClick={() => { 
                        onPatch(checkedChanged, textChanged)
                    }} />
            </div>

        </div>
    )
}

export default EditTaskForm