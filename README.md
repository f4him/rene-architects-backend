# rene-architects-backend
API for https://renearchitects.com

## Details

- Architecture farm website
- REST api for blog section
- Admin routes (CRUD operations on posts etc) 

### Routes Created
get("/userlist", getAllUser)\
post("/adduser", addSingleUser)\
put("/updateuser/:userID", updateUser)\
delete("/deleteuser/:userID", deleteUser)

get("/blog", getAllPosts)\
get("/post/:postID", getSinglePost)\
post("/addpost", addSinglePost)\
put("/updatepost/:postID", updatePost)\
delete("/deletepost/:postID", deletePost)

get("/projects", getAllProjects)\
get("/project/:projectID", getSingleProject)\
post("/addproject", addSingleProject)\
put("/updateproject/:projectID", updateProject)\
delete("/deleteproject/:projectID", deleteProject)

get("/tags", getAllTags)\
post("/addtag", addSingleTag)\
delete("/deletetag/:tagID", deleteTag)

get("/categories", getAllCategories)\
post("/addcategory", addSingleCategory)\
delete("/deletecategory/:categoryID", deleteCategory)

## To-Do

- Authentication
