import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Task from '../Task/Task'
import styles from './GetAllTasks.module.css'

const GetAllTasks = (props) => {
    
    const [appState, setAppState] = useState({
        loading: true,
        response:null,
    })
    
    useEffect(() => {
        async function getdata(){
            const tasks_api = 'http://127.0.0.1:8080/tasks'
            
            const response = await axios.get(tasks_api)
            const data = await response.data
    
   
            setAppState({loading:false, response:data})
        }
        getdata()
    },[appState.loading])

    return(
        <div className={styles.parent}>
            {
                !appState.loading ? (
                    <>
                        {
                            appState.response.map((el,i) => {
                                return <Task
                                 key={i} 
                                 taskName={el.name} 
                                 taskStatus={el.completed} />
                            })
                        }
                    </>
                ):(<p>Loading...</p>)
            }
        </div>
    )
}

export default GetAllTasks