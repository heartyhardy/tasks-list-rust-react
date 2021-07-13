use actix_cors::Cors;
use actix_web::{web, App, HttpServer};

mod api;

use crate::api::routes::*;

const _URL:&str = "127.0.0.1:8080";

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    HttpServer::new(|| {
        let cors = Cors::default()
         .allow_any_origin()
         .allow_any_header()
         .allow_any_method();

        App::new()
         .wrap(cors)
         .service(index)
         .service(
    web::scope("/tasks") // Using /tasks scope with routes in routes.rs
            .service(all_tasks)
            .service(get_pending)
            .service(get_completed)
            .service(get_task)
            .service(new_task)
            .service(modify_task)
            .service(delete_task)
         )
    })
    .bind(_URL)?
    .run()
    .await
}
