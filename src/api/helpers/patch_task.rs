use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct PatchTask{
    pub id: u16,
    pub name:Option<String>,
    pub completed:Option<bool>
}