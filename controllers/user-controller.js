import User from '../models/users';


//get list of all user
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

// add a single user
export const addSingleUser = async (req, res, next) => {
    const {name, email, password} = req.body;
    
    let existingUser;
    try{
        existingUser = await User.findOne({email});

    }catch(err){
        console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message : "user exists"})
    }

    const user = new User({
        name,
        email,
        password
    });

    try{
        await user.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({user})
}


