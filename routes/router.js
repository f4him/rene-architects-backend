import express from "express";
const router = express.Router();


import { getAllUser, addSingleUser } from "../controllers/user-controller";
import { getAllPosts, addSinglePost } from "../controllers/blog-controller";
import { addSingleCategory, addSingleTag, getAllCategories, getAllTags } from "../controllers/misc-controller";
import { addSingleProject, getAllProjects } from "../controllers/project-controller";

// User routes
router.get("/userlist", getAllUser );
router.post("/adduser", addSingleUser);


// blog routes
router.get("/blog", getAllPosts );
router.post("/addpost", addSinglePost );



// project routes

router.get("/projects", getAllProjects );
router.post("/addproject", addSingleProject );




//misc routes
// tags
router.get("/tags", getAllTags );
router.post("/addtag", addSingleTag );

// cats
router.get("/categories", getAllCategories );
router.post("/addcategory", addSingleCategory );



export default router;