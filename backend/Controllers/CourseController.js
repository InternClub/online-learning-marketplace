import Course from "../schema/Course.js";

// crete a new course
export const createCourse = async (req, res) => {
  try {
    const { title } = req.body;
    //generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|_$)+/g, "");
    //check if course with the same slug exists
    const existingCourse = await Course.findOne({slug})
    if(existingCourse){
        return res.status(409).json({message:"Course with this title already exixts"});
    }  
    //create and save new course
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: "Error in creation of course" });
    console.log(error.message);
  }
};
