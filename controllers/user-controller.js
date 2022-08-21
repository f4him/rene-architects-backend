import User from '../models/users';

export const getAllUser = async (req, res, next) => {
    let users;
    try{
        users = await User.find();
    } catch(err){
        console.log(err);
    }

    if(users.length == 0) {
        return res.status(404).json({ message : "No users found"});
    }
    
    
    return res.status(200).json({ users });




}