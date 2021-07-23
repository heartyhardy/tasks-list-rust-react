import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DeleteTask from "../DeleteTask/DeleteTask";
import GetAllTasks from "../GetAllTasks/GetAllTasks";
import GetTask from "../GetTask/GetTask";
import PatchTask from "../PatchTask/PatchTask";
import PostTask from "../PostTask/PostTask";
import styles from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <Router>
            <div className={styles.parent}>
                <div className={styles.sidebar}>
                    <ul>
                        <li>
                            <Link to="/" className={styles.link}>Home</Link>
                        </li>
                        <li>
                            <Link to="/getbyid" className={styles.link}>Search</Link>
                        </li>
                        <li>
                            <Link to="/new" className={styles.link}>New Task</Link>
                        </li>
                        <li>
                            <Link to="/modify" className={styles.link}>Modify Task</Link>
                        </li>
                        <li>
                            <Link to="/delete" className={styles.link}>Delete Task</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.routes}>

                    <Switch>
                        <Route exact path="/">
                            <GetAllTasks />
                        </Route>
                        <Route path="/getbyid">
                            <GetTask />
                        </Route>
                        <Route path="/new">
                            <PostTask />
                        </Route>
                        <Route path="/modify">
                            <PatchTask />
                        </Route>
                        <Route path="/delete">
                            <DeleteTask />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Sidebar