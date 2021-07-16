use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct PostTask{
    pub name:String,
    pub completed:bool
}