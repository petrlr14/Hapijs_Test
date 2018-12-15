const User=require("./../models/Users");

const userController={
    findAll:async (req, res)=>{
        console.log(res)
        let user=await User.find({});
        return response={
            status:200,
            user
        };
    },
    find:async(req, res)=>{
        let user=await User.find({
            username:req.params.username,
        })
        if(!user)
            return response={
                status:404,
                token:"not found"
            }
        else
            return response={
                status:200,
                token:"found"
            }
    },
    create:async(req, res)=>{
        let user=new User({
            username:req.payload.username,
            password:req.payload.password
        });
        let usercreated=await user.save();
        return res.response(usercreated).code(200);
    },
    delete:async(req, res)=>{
        let userDeleted=await User.findOneAndDelete({_id:req.params._id});
        if(!userDeleted){
            return res.response({status:'Faild to find user'}).code(404);
        }else{
            return res.response(userDeleted).code(200);
        }

    },
    update:async(req, res)=>{
        if(req.params._id.length<24){
            return res.response({status:"faild to find user"}).code(404);
        }
        let userUpdated=await User.findOneAndUpdate({_id:req.params._id},req.payload, {new:true});
        if(!userUpdated){
            return res.response({status:"faild to find user"}).code(404);
        }else{
            return res.response(userUpdated).code(200);
        }
    }
}

module.exports= userController;