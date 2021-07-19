use std::fmt;
use serde::{Serialize, Deserialize};
use std::sync::atomic::{AtomicU16, Ordering};

static NEXT_ID:AtomicU16 = AtomicU16::new(0);

#[derive(Clone)]
#[derive(Serialize, Deserialize)]
pub struct Task{
    id:u16,
    pub name: String,
    pub completed: bool, 
}

//Associated Functions
impl Task{

    pub fn new(name: String, completed:bool) -> Task{
        Task{
            id: Task::gen_atomic_id(),
            name,
            completed,
        }
    }

    //Generate IDs for Tasks
    pub fn gen_atomic_id() -> u16{
        NEXT_ID.fetch_add(1, Ordering::Relaxed)
    }

}

//Methods
impl Task{
    pub fn get_id(&self) -> u16{
        self.id
    }
}

impl fmt::Display for Task{
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result{
        write!(f, "name:{} completed:{}", self.name, self.completed)
    }
}

