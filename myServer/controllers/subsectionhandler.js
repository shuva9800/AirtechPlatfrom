const subSection = require("../models/subsection");
const Section = require("../models/section");
const Course = require("../models/courses");
const { imageUploadToCloudinary } = require("../utility/imageUpload");
require("dotenv").config();

//create subSection
exports.createSubSection = async (req, res) => {
  try {
    //date fetch
    const { title, timeduration, description, sectionId, courseId } = req.body;
    //video file extract
    const video = req.files.videoFile;

    //validating
    //
    if (!title || !timeduration || !description || !sectionId || !video) {
      return res.status(400).json({
        success: false,
        message: " all are required",
      });
    }
    //video upload in cloudinary

    const videouploadtoCloudinary = await imageUploadToCloudinary(
      video,
      process.env.FOLDER_NAME
    );
    //create subsection
    const createSubSection = await subSection.create({
      title,
      timeduration,
      description,
      videoUrl: videouploadtoCloudinary.secure_url,
    });

    //update it to section schema
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          subsection: createSubSection._id,
        },
      },
      { new: true }
    )
      .populate("subsection")
      .exec();

    const updatedCourse = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          //?? needed or not?
          path: "subsection",
        },
      })
      .exec();
    //return responce
    return res.status(200).json({
      success: true,
      message: "subsection create successfullyu",
      data: updatedCourse,
    });
  } catch (error) {
    console.log("error in create subsection", error);
    return res.status(500).json({
      success: false,
      message: "error while creating subsection",
      error: error.message,
    });
  }
};

//HW: update subsection & delete subsection

//update subsection
exports.updateSubSection = async (req, res) => {
  try {
    //fetch data
    const { title, timeduration, description, subSectionId, courseId } = req.body;
    const subsection = await subSection.findById(subSectionId);
    if (!subsection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      });
    }

    if (title !== undefined) {
      subsection.title = title;
    }

    if (description !== undefined) {
      subsection.description = description;
    }
    if (timeduration !== undefined) {
      subsection.timeduration = timeduration;
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.videoFile;
      const videouploadtoCloudinary = await imageUploadToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
       subsection.videoUrl = videouploadtoCloudinary.secure_url
        // subsection.timeDuration = `${videouploadtoCloudinary.duration}`
    }

    await subsection.save();
   

    //updated course with updated subSection
    const updatedCourse = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subsection",
        },
      })
      .exec();
    //responce return
    return res.status(200).json({
      success: true,
      message: " subsection updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.log("error in updateSection", error);
    return res.status(500).json({
      success: false,
      message: "error while Updating subSection ",
      error: error.message,
    });
  }
};

//delete subsection
exports.deleteSubSection = async (req, res, courseId) => {
  try {
    //fetch subsection Id

    //section id ftch
    const { sectionId, subSectionId, courseId } = req.body;
    //find sub section
    await subSection.findByIdAndDelete(subSectionId);

    // we need to update course schema
    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subsection: subSectionId,
        },
      },
      { new: true }
    ).populate("subsection");

    const updatedCourse = await Course.findById(courseId)
      .populate({
        path: "courseContent",
        populate: {
          path: "subsection",
        },
      })
      .exec();

    //responce return
    return res.status(200).json({
      success: true,
      message: " subsection delete successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.log("error in delete subsection", error);
    return res.status(500).json({
      success: false,
      message: "error while deleting subsection",
      error: error.message,
    });
  }
};
