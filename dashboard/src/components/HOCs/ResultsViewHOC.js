import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './ResultsViewHOC.module.css'
import Task from '../Task/Task'

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

 
    return(
        <div className={styles.parent}>
            {apiResponse.response ? (
                <>
                    <Task
                     key={apiResponse.response.id} 
                     taskName={apiResponse.response.name} 
                     taskStatus={apiResponse.response.completed} />
                </>
            ):(<p>NOT FOUND!</p>)}
        </div>
    )
}

export default ResultsViewHOC