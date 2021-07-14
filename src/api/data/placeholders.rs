use std::sync::Mutex;
use serde::{Serialize, Deserialize};

use crate::api::models::task::{Task};


#[derive(Serialize, Deserialize)]
pub struct PlaceholderData{
    pub tasks:Mutex<Vec<Task>>,
}

impl PlaceholderData{
    
    pub fn new() -> PlaceholderData{
        PlaceholderData{
            tasks: Mutex::new(vec![
                Task{name:String::from("Workout"),completed:true},
                Task{name:String::from("Code"),completed:false},
                Task{name:String::from("Learn"),completed:false},
                Task{name:String::from("Hike"),completed:true},
                Task{name:String::from("Repeat"),completed:false},                
                ],
            )
        }
    }


    pub fn by_status(&self, completed:bool) -> Vec<Task>{
        let result = self.tasks.lock().unwrap()
            .iter()
            .filter(|e| e.completed == completed)
            .cloned()
            .collect();
        
        result
    }
}