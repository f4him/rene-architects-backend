# rene-architects-backend
Backend api for https://renearchitects.com



get("/userlist", getAllUser )
post("/adduser", addSingleUser)
put("/updateuser/:userID", updateUser)
delete("/deleteuser/:userID", deleteUser)

get("/blog", getAllPosts )
get("/post/:postID", getSinglePost)
post("/addpost", addSinglePost )
put("/updatepost/:postID", updatePost)
delete("/deletepost/:postID", deletePost)

get("/projects", getAllProjects )
get("/project/:projectID", getSingleProject)
post("/addproject", addSingleProject )
put("/updateproject/:projectID", updateProject)
delete("/deleteproject/:projectID", deleteProject)

get("/tags", getAllTags )
post("/addtag", addSingleTag )
delete("/deletetag/:tagID", deleteTag)

get("/categories", getAllCategories )
post("/addcategory", addSingleCategory )
delete("/deletecategory/:categoryID", deleteCategory)