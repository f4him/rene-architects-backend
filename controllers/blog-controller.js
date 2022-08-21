import Post from "../models/posts";


// get all posts
export const getAllPosts = async (req, res, next) => {
    let posts;
    try{
        posts = await Post.find();
    } catch(err){
        console.log(err);
    }

    if(posts.length == 0) {
        return res.status(404).json({ message : "No posts found"});
    }
    return res.status(200).json({ posts });
}


// add single post

export const addSinglePost = async (req, res, next) => {
    const {title, body} = req.body;
    
    // image er kaj baki

    const post = new Post({
        title,
        body
    });

    try{
        await post.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({post})
}


//update post
export const updatePost = (req, res, next) => {
    const {title, body} = req.body;

    Post.findByIdAndUpdate(
      req.params.postID,
      {title, body},
      { new: true }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Post not found with id " + req.params.postID,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        return res.status(500).send({
            message: "Error updating post with id " + req.params.postID,
        });
      });
  };


//   delete post
export const deletePost = (req, res) => {
    Post.findByIdAndRemove(req.params.postID)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Post not found with id " + req.params.postID,
          });
        }
        res.send({ message: "Post deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete post with id " + req.params.postID,
        });
      });
  };