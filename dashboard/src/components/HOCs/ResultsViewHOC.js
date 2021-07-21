import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './ResultsViewHOC.module.css'
import Task from '../Task/Task'
import NotFoundCard from '../NotFoundCard/NotFoundCard'

const ResultsViewHOC = (contents) => {
    

    const [apiResponse, setApiResponse] = useState({
        isLoading: true,
        response: null
    })

    useEffect(() => {
        
        async function getData(){         
            
            if(!contents.srcID || contents.srcID<0){
                return
            }
            
            const tasks_api = `http://127.0.0.1:8080/tasks/${Math.abs(contents.srcID)}`

            const response = await axios.get(tasks_api)
            const data = await response.data
            
            setApiResponse({isLoading:false, response: data})
        }
        getData()
    },[contents.srcID])


    const deleteTask = (id) => {
        
        async function delTask(){
            if(!contents.srcID || contents.srcID<0){
                return
            }
            
            const tasks_api = `http://127.0.0.1:8080/tasks/${Math.abs(contents.srcID)}`

            const response = await axios.delete(tasks_api)
            const data = await response.data
            
            // Handle errors using data
            // Navigate off from here
        }
        delTask()
    }

 
    return(
        <div className={styles.parent}>
            {apiResponse.response ? (
                <>
                    <Task
                     key={apiResponse.response.id}
                     id={apiResponse.response.id}
                     taskName={apiResponse.response.name} 
                     taskStatus={apiResponse.response.completed}
                     showDel={contents.showDel}
                     deleteTask={deleteTask}
                     />
                </>
            ):(<NotFoundCard />)}
        </div>
    )
}

export default ResultsViewHOC