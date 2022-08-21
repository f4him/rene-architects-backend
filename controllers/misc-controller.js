import Category from "../models/categories";
import Tag from "../models/tags";

// get all tags
export const getAllTags = async (req, res, next) => {
    let tags;
    try{
        tags = await Tag.find();
    } catch(err){
        console.log(err);
    }
    if(tags.length == 0) {
        return res.status(404).json({ message : "No tags found"});
    }
    return res.status(200).json({ tags });
}



// create a tag

export const addSingleTag = async (req, res, next) => {
    const {name} = req.body;
    
    const tag = new Tag({
        name
    });
    
    try{
        await tag.save();
    }catch (err){
        console.log(err)
        
    }
    return res.status(201).json({tag})
}

//   delete tag
export const deleteTag = (req, res) => {
    Tag.findByIdAndRemove(req.params.tagID)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Tag not found with id " + req.params.tagID,
          });
        }
        res.send({ message: "Tag deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete tag with id " + req.params.tagID,
        });
      });
  };


// get all categories
export const getAllCategories = async (req, res, next) => {
    let categories;
    try{
        categories = await Category.find();
    } catch(err){
        console.log(err);
    }

    if(categories.length == 0) {
        return res.status(404).json({ message : "No categories found"});
    }
    return res.status(200).json({ categories });
}



// create a category

export const addSingleCategory = async (req, res, next) => {
    const {name} = req.body;
    
    const category = new Category({
        name
    });

    try{
        await category.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({category})
}


//   delete category
export const deleteCategory = (req, res) => {
    Category.findByIdAndRemove(req.params.categoryID)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            message: "Category not found with id " + req.params.categoryID,
          });
        }
        res.send({ message: "Category deleted successfully!" });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Could not delete category with id " + req.params.categoryID,
        });
      });
  };