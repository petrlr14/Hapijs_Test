const user=process.env.USERDB||"";
const pass=process.env.PASSDB||"";
const server=process.env.SERVERDB||"localhost";//ds121282.mlab.com
const db=process.env.DB||"hapitest";
const uri=`mongodb://${user}:${pass}@${server}/${db}`;

module.exports={
    mongodb:{
        URI:uri
    }
}