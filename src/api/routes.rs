use actix_web::{get, post, patch, delete, web, HttpResponse, Responder};

//use crate::api::models::task::{Task};
use crate::api::data::placeholders::{PlaceholderData};

#[get("/")]
pub async fn index() -> impl Responder{
    HttpResponse::Ok()
        .body("Welcome to Task-List!")
}

// Routes using /tasks scope goes here
// for example if you see #[get(/{id})] in the handler
// This translates to GET /tasks/{id}
// See URL dispatch -> Scoping routes in Actix web getting started guide for details

//GET /tasks
#[get("")]
pub async fn all_tasks() -> impl Responder{
    HttpResponse::Ok()
        .json(PlaceholderData::new())
}

//GET /tasks/{id}
#[get("/{id}")]
pub async fn get_task(task_id: web::Path<u16>) -> impl Responder{
    HttpResponse::Ok()
        .body(format!("Path param: {}", task_id))
}

//GET /tasks/completed
#[get("/completed")]
pub async fn get_completed() -> impl Responder{
    HttpResponse::Ok()
        .json(PlaceholderData::new().by_status(true))
}

//GET /tasks/pending
#[get("/pending")]
pub async fn get_pending() -> impl Responder{
    HttpResponse::Ok()
        .json(PlaceholderData::new().by_status(false))
}

//POST /tasks
#[post("")]
pub async fn new_task(task:String) -> impl Responder{
    HttpResponse::Ok()
        .body(format!("New task: {} added!", task))
}

//TODO
//PATCH /tasks/{id}
#[patch("/{id}")]
pub async fn modify_task() -> impl Responder{
    HttpResponse::Ok()
        .body("do the logic")
}

//TODO
//DELETE /tasks/{id}
#[delete("/{id}")]
pub async fn delete_task(task_id: web::Path<u16>) -> impl Responder{
    HttpResponse::Ok()
        .body(format!("Task id:{} successfully deleted!", task_id))
}

