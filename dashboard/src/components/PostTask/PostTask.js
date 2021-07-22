import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import TasksHOC from '../HOCs/TasksHOC'
import NewTaskForm from '../NewTaskForm/NewTaskForm'


const PostTask = (props) => {

    const tasks_api = `http://127.0.0.1:8080/tasks`

    const history = useHistory();
    const [newTaskName, setTaskName] = useState("")
    
    const onTextChange = (value) => {
        
        if(value === ""){
            return
        }
        
        if(!value.match(/^[ A-Za-z]+$/)){
            setTaskName("")
            return
        }

        setTaskName(value)
    }

    const onPost = () => {
        async function postData(){

            if(newTaskName === ""){
                return
            }

            let contents = {name: newTaskName, completed: false}

            let response = await axios.post(tasks_api, contents)
            let data = await response.data
            
            setTimeout(()=>{
                history.push("/")
            }, 250)
            // Require Error Handling (Check data)
        }
        postData()
    }

    return(
        <TasksHOC>
            <NewTaskForm onTextChange={onTextChange} onPost={onPost}/>
        </TasksHOC>
    )
}

export default PostTask