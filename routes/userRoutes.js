'use strict';

const controller=require("./../controllers/UserController");

module.exports={
    name:'userRoutes',
    register: async (server, h)=>{
        server.route([
            {
                method:"GET",
                path:"/getAll", 
                handler:controller.findAll
            },
            {
                method:"POST",
                path:"/users", 
                handler:controller.create
            },
            {
                method:"DELETE",
                path:"/user/{_id}",
                handler:controller.delete 
            },
            {
                method:"PUT",
                path:"/user/{_id}",
                handler:controller.update
            }

        ]);
    }
}