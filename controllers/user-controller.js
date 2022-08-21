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


//update user
export const updateUser = (req, res, next) => {
    const {name, email, password} = req.body;

    User.findByIdAndUpdate(
      req.params.userID,
      {name, email, password},
      { new: true }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userID,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userID,
        });
      });
  };


//   delete user

export const deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.userID)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "User not found with id " + req.params.userID,
          });
        }
        res.send({ message: "User deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete user with id " + req.params.userID,
        });
      });
  };
  