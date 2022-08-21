import Categories from "../models/categories";
import Tags from "../models/tags";

// get all tags
export const getAllTags = async (req, res, next) => {
    let tags;
    try{
        tags = await Tags.find();
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
    
    const tag = new Tags({
        name
    });

    try{
        await tag.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({tag})
}



// get all categories
export const getAllCategories = async (req, res, next) => {
    let categories;
    try{
        categories = await Categories.find();
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
    
    const category = new Categories({
        name
    });

    try{
        await category.save();
    }catch (err){
        console.log(err)

    }
    return res.status(201).json({category})
}