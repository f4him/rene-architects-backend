import Project from "../models/projects"

// get all projects
export const getAllProjects = async (req, res, next) => {
    let projects;
    try{
        projects = await Project.find();
    } catch(err){
        console.log(err);
    }

    if(projects.length == 0) {
        return res.status(404).json({ message : "No projects found"});
    }
    return res.status(200).json({ projects });
}


// add single project

export const addSingleProject = async (req, res, next) => {
    const {name, location} = req.body;
    
    // image er kaj baki

    const post = new Project({
        name,
        location
    });

    try{
        await post.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({post})
}

//update project
export const updateProject = (req, res, next) => {
    const {name, location} = req.body;

    Project.findByIdAndUpdate(
      req.params.projectID,
      {name, location},
      { new: true }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Project not found with id " + req.params.projectID,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        return res.status(500).send({
            message: "Error updating project with id " + req.params.projectID,
        });
      });
  };
