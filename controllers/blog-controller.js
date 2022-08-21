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


