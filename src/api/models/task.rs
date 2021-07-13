use std::fmt;
use serde::{Serialize, Deserialize};

#[derive(Clone)]
#[derive(Serialize, Deserialize)]
pub struct Task{
    pub name: String,
    pub completed: bool, 
}

impl fmt::Display for Task{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result{
        write!(f, "name:{} completed:{}", self.name, self.completed)
    }
}