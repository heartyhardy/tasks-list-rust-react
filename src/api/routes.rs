use actix_web::{get, post, patch, delete, web, HttpResponse, Responder};

use crate::api::helpers::post_task::{PostTask};
use crate::api::helpers::patch_task::{PatchTask};
use crate::api::data::placeholders::{PlaceholderData};

// --All Routes--


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
pub async fn all_tasks(state: web::Data<PlaceholderData>) -> impl Responder{
    let tasks = &state.tasks.lock().unwrap();
    HttpResponse::Ok()
        .json(tasks.to_vec())
}


//GET /tasks/{id}
#[get("/{id}")]
pub async fn get_task(state: web::Data<PlaceholderData>, task_id: web::Path<u16>) -> impl Responder{
    let tasks = &state;

    HttpResponse::Ok()
        .json(PlaceholderData::by_id(&tasks, *task_id))
}


//GET /tasks/completed
#[get("/completed")]
pub async fn get_completed(state:web::Data<PlaceholderData>) -> impl Responder{
    let tasks = &state;
    
    HttpResponse::Ok()
        .json(tasks.by_status(true))
}


//GET /tasks/pending
#[get("/pending")]
pub async fn get_pending(state:web::Data<PlaceholderData>) -> impl Responder{
    let tasks = &state;
    
    HttpResponse::Ok()
        .json(tasks.by_status(false))
}


//POST /tasks
#[post("")]
pub async fn new_task(state: web::Data<PlaceholderData>, task:web::Json<PostTask>) -> impl Responder{
    let mut tasks = &state;
    let result = PlaceholderData::new_task(&mut tasks, task.name.clone(), task.completed);   

    HttpResponse::Ok()
        .json(result)
}


//PATCH /tasks/{id}
#[patch("")]
pub async fn modify_task(state: web::Data<PlaceholderData>, task:web::Json<PatchTask>) -> impl Responder{
    
    let mut tasks = &state;
    let result = PlaceholderData::patch_task(&mut tasks, task.id, task.name.clone(), task.completed);
    
    if result {HttpResponse::Ok().json(result)} else {HttpResponse::NotFound().json(result)}
}


//DELETE /tasks/{id}
#[delete("/{id}")]
pub async fn delete_task(state: web::Data<PlaceholderData>, task_id: web::Path<u16>) -> impl Responder{
    
    let mut tasks = &state;
    let result = PlaceholderData::delete_task(&mut tasks, *task_id);

    if result {HttpResponse::Ok().json(result)} else {HttpResponse::NotFound().json(result)}

}

