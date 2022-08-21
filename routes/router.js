import express from "express";
const router = express.Router();


import { getAllUser, addSingleUser, updateUser, deleteUser } from "../controllers/user-controller";
import { getAllPosts, addSinglePost, updatePost, deletePost } from "../controllers/blog-controller";
import { addSingleCategory, addSingleTag, getAllCategories, getAllTags } from "../controllers/misc-controller";
import { addSingleProject, deleteProject, getAllProjects, updateProject } from "../controllers/project-controller";

// User routes
router.get("/userlist", getAllUser );
router.post("/adduser", addSingleUser);
router.put("/updateuser/:userID", updateUser);
router.delete("/deleteuser/:userID", deleteUser);


// blog routes
router.get("/blog", getAllPosts );
router.post("/addpost", addSinglePost );
router.put("/updatepost/:postID", updatePost);
router.delete("/deletepost/:postID", deletePost);


// project routes

router.get("/projects", getAllProjects );
router.post("/addproject", addSingleProject );
router.put("/updateproject/:projectID", updateProject);
router.delete("/deleteproject/:projectID", deleteProject);


//misc routes
// tags
router.get("/tags", getAllTags );
router.post("/addtag", addSingleTag );

// cats
router.get("/categories", getAllCategories );
router.post("/addcategory", addSingleCategory );



export default router;