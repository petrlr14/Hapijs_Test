'use strict';

const Hapi=require("hapi");
const UserRoutes=require("./routes/userRoutes");

const server=Hapi.Server({
    port:+process.env.PORT,
    host:'0.0.0.0',
    app:{}
});


const start=async()=>{
    try{
        await server.register(UserRoutes);
        await server.start();
        require("./database/database");
    }catch(err){
        console.log("Error staring Hapi server", err);
    }
}

start();