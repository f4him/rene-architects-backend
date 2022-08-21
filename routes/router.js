import express from "express";
const router = express.Router();


import { getAllUser, addSingleUser } from "../controllers/user-controller";
import { getAllPosts, addSinglePost } from "../controllers/blog-controller";


// User routes
router.get("/userlist", getAllUser );
router.post("/adduser", addSingleUser);


// blog routes
router.get("/blog", getAllPosts );
router.post("/addpost", addSinglePost );



// project routes

// router.get("/projects", getAllProjects );
// router.get("/project/:id", getSingleProject );

//misc routes


export default router;