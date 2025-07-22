const Catagory = require("../models/catagory");
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }


//only Admin can create Catagory/Tags
exports.catagoryCreation = async (req, res) => {
  try {
    //fetch data
    const { name, description } = req.body;
    //validation
    if (!name || !description) {
      return res.status(404).json({
        success: false,
        message: "all fill to be field",
      });
    }
    //create entry in DB
    const catagoryEntryinDb = await Catagory.create({
      name,
      description,
    });
    return res.status(200).json({
      success: true,
      message: " Catagory creation is successful",
      data: catagoryEntryinDb,
    });
  } catch (error) {
    console.log("error in catagory creation ", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//fetch all tags

exports.showAllCatagory = async (req, res) => {
  try {
    const allCatagory = await Catagory.find(
      {},
      { name: true, description: true }
    );
    return res.status(200).json({
      success: true,
      message: "all Catagory fetched",
      allCatagory,
    });
  } catch (err) {
    console.log("error in tag fetch ", err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get specific catagory page details
// top 10 catagory function pending
exports.catagoryPageDetails = async (req, res) => {
  console.log("course id", req.body)
  try {
    //get catagory id
    const { catagoryId } = req.body;
    //get course for specfic catagory id
    const selectedCatagory = await Catagory.findById({ _id: catagoryId })
      .populate({
        path: "course",
        match: { status: "Published" },
        populate: "ratingandreview",
      })
      .exec();
    //validation for coourse
    if (!selectedCatagory) {
      return res.status(404).json({
        success: false,
        message: "there is no avaliable course for this catagory",
      });
    }

    // Handle the case when there are no courses
    if (selectedCatagory.course.length === 0) {
      console.log("No courses found for the selected category.");
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      });
    }

    //get different catagory course
    const categoriesExceptSelected = await Catagory.find({
      _id: { $ne: catagoryId },
    });

    let differentCategory = await Catagory.findOne(
      categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
        ._id
    )
      .populate({
        path: "course",
        match: { status: "Published" },
      })
      .exec();
    // Get top-selling courses across all categories
    //Top 10 selling course
    const allCategories = await Catagory.find()
      .populate({
        path: "course",
        match: { status: "Published" },
        populate: {
          path: "instractor",
        },
      })
      .exec();
    const allCourses = allCategories.flatMap((category) => category.course);
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);
    // console.log("mostSellingCourses COURSE", mostSellingCourses)

    //return res
    return res.status(200).json({
      success: true,
      message: "course if fetched successfully",
      data: {
        selectedCatagory,
        differentCategory,
        mostSellingCourses,
      },
    });
  } catch (error) {
    console.log("error in tag fetch ", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//...........................//.............................
