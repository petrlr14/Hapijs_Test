'use strict';

const Hapi=require("hapi");
const UserRoutes=require("./routes/userRoutes");


const server=Hapi.Server({
    port:3000,
    host:'localhost',
    app:{}
});


const start=async()=>{
    try{
        await server.register(UserRoutes);
        await server.start();
        console.log(`Server is running at: ${server.info.uri}`);
        require("./database/database");
    }catch(err){
        console.log("Error staring Hapi server", err);
    }
}

start();