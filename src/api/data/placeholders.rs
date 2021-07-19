use std::sync::Mutex;
use serde::{Serialize, Deserialize};

use crate::api::models::task::{Task};


#[derive(Serialize, Deserialize)]
pub struct PlaceholderData{
    pub tasks:Mutex<Vec<Task>>,
}

//Associated functions
impl PlaceholderData{
    
    pub fn new() -> PlaceholderData{
        PlaceholderData{
            tasks: Mutex::new(vec![
                    Task::new(String::from("Workout"), true),
                    Task::new(String::from("Code"), false),
                    Task::new(String::from("Learn"),false),
                    Task::new(String::from("Hike"),true),
                    Task::new(String::from("Repeat"),false),                
                ],
            )
        }
    }

}


//Methods
impl PlaceholderData{

    pub fn by_status(&self, completed:bool) -> Vec<Task>{
        let result = self.tasks.lock().unwrap()
            .iter()
            .filter(|e| e.completed == completed)
            .cloned()
            .collect();
        
        result
    }

    pub fn by_id(&self, id:u16) -> Option<Task>{
        let tasks =  self.tasks.lock().unwrap()
            .iter()
            .filter(|e| e.get_id() == id)
            .cloned()
            .collect::<Vec<Task>>();

        if tasks.len() > 0 {Some(tasks[0].clone())} else{None}
    }

    pub fn new_task(&self, name: String, completed:bool) -> Vec<Task>{
        let new_task = Task::new(name, completed);

        let mut tasks = self.tasks.lock().unwrap();
        tasks.push(new_task.clone());

        vec![new_task]
    }

    pub fn patch_task(&self,id: u16, name:Option<String>, completed:Option<bool>) -> bool{

        let mut tasks = self.tasks.lock().unwrap();
        
        if let Some(pos) = tasks
         .iter()
         .position(|e| e.get_id() == id){
             if let Some(new_name) = name{
                 tasks[pos].name = new_name;
             }
             if let Some(new_status) = completed{
                 tasks[pos].completed = new_status;
             }

             return true;
         }
        else{
            return false;
        }
    }

    pub fn delete_task(&self, id:u16) -> bool{
        
        let mut tasks = self.tasks.lock().unwrap();

        if let Some(pos) = tasks
        .iter()
        .position(|e| e.get_id() == id){
            tasks.remove(pos);

            return true;
        }
       else{
           return false;
       }
   }
    
}
