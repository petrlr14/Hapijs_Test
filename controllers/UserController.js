const User=require("./../models/Users");

const userController={
    findAll:async (req, res)=>{
        let user=await User.find({});
        return response={
            status:200,
            user
        };
    },
    create:async(req, res)=>{
        let user=new User({
            name:req.payload.name,
            url:req.payload.url
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