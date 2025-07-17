import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  createSubSection,
  updateSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../app/slicess/courseSlice";
import { RxCross2 } from "react-icons/rx";
import Upload from "../Upload";
import IconBtn from "../../../../common/IconBtn"
import { useForm } from "react-hook-form";

export default function SubSectionModal({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  console.log("inside Subsection component ", course)

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title);
      setValue("lectureDesc", modalData.description);
      setValue("lectureVideo", modalData.videoUrl);
      setValue("timeDuration", modalData.timeduration);
    }
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    console.log("edit button hit******",currentValues)
    if (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl ||
      currentValues.timeDuration !== modalData.timeduration 
    ) {
      return true;
    } else {
      return false;
    }
  };
  //edit function
  const handelEditSubSection = async () => {
    const currentValues = getValues();
    const formData = new FormData();
    formData.append("courseId", course._id);
    formData.append("sectionId", modalData.sectionId);
    formData.append("subSectionId", modalData._id);

    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle);
    }
    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc);
    }
    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("videoFile", currentValues.lectureVideo);
    }
    if (currentValues.timeDuration !== modalData.timeduration) {
      formData.append("timeduration", currentValues.timeDuration);
    }
    setLoading(true);
    const result = await updateSubSection(formData, token);
    console.log("update subSection##", result)
    if (result) {
      //check some extra
      dispatch(setCourse(result));
    }
    setModalData(null);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    if (view) {
      return;
    }
    if (edit) {
      
      if (isFormUpdated) {
        handelEditSubSection();
        toast.error("No Changes made to the form");
      } else {
        //hit edit function
        handelEditSubSection();
      }
      return;
    }
    const formData = new FormData();
    formData.append("courseId", course._id);
    formData.append("sectionId", modalData);
    formData.append("title", data.lectureTitle);
    formData.append("timeduration", data.timeDuration);
    formData.append("description", data.lectureDesc);
    formData.append("videoFile", data.lectureVideo);
    setLoading(true);
    //api call
    const result = await createSubSection(formData, token);
    console.log("sbsection creation result...",result)
    if (result) {
      //check for updation
      dispatch(setCourse(result));
    }
    setModalData(null);
    setLoading(false);
  };

  return (
    <div>
      <div>
        <div>
          <p>
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </p>
          <button onClick={() => (!loading ? setModalData(false) : {})}>
            <RxCross2 />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Upload
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />
           <div>
            <label>Time Duration</label>
            <input
                id="timeDuration"
                placeholder="Enter total video time"
                {...register("timeDuration",{required:true})}
                className="w-full form-style"
            />
            {errors.timeDuration && (<span>Total video time is required</span>)}
          </div>
          <div>
            <label>Lecture Title</label>
            <input
                id="lectureTitle"
                placeholder="Enter Lecture Title"
                {...register("lectureTitle",{required:true})}
                className="w-full form-style"
            />
            {errors.lectureTitle && (<span>Lecture Title is required</span>)}
          </div>
          <div>
            <label htmlFor="lectureDesc">Lecture Description</label>
            <textarea

            id="lectureDesc"
            placeholder="Enter Lecture Description"
            {...register("lectureDesc",{required:true})}
            className="w-full min-h-[130px] form-style"
            />
            {errors.lectureDesc && (<span>Lecture Description is required</span>)}
          </div>
          {
            !view &&(
                <div>
                    <IconBtn
                        text={loading? "Loading" :edit? "Save Changes" : "Save"}
                    />
                </div>
            )
          }
        </form>
      </div>
    </div>
  );
}
