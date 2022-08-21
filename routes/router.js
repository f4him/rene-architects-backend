import express from "express";
const router = express.Router();

import { getAllUser, addSingleUser, updateUser, deleteUser } from "../controllers/user-controller";
import { getAllPosts, addSinglePost, updatePost, deletePost, getSinglePost } from "../controllers/blog-controller";
import { addSingleCategory, addSingleTag, deleteCategory, deleteTag, getAllCategories, getAllTags } from "../controllers/misc-controller";
import { addSingleProject, deleteProject, getAllProjects, getSingleProject, updateProject } from "../controllers/project-controller";


// User routes
router.get("/userlist", getAllUser );
router.post("/adduser", addSingleUser);
router.put("/updateuser/:userID", updateUser);
router.delete("/deleteuser/:userID", deleteUser);


// blog routes
router.get("/blog", getAllPosts );
router.get("/post/:postID", getSinglePost);
router.post("/addpost", addSinglePost );
router.put("/updatepost/:postID", updatePost);
router.delete("/deletepost/:postID", deletePost);


// project routes
router.get("/projects", getAllProjects );
router.get("/project/:projectID", getSingleProject);
router.post("/addproject", addSingleProject );
router.put("/updateproject/:projectID", updateProject);
router.delete("/deleteproject/:projectID", deleteProject);


//misc routes
// tags
router.get("/tags", getAllTags );
router.post("/addtag", addSingleTag );
router.delete("/deletetag/:tagID", deleteTag);

// cats
router.get("/categories", getAllCategories );
router.post("/addcategory", addSingleCategory );
router.delete("/deletecategory/:categoryID", deleteCategory);



export default router;