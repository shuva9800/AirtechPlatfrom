import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import SubSectionModal from "./SubSectionModal";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import { deleteSection, deleteSubSection } from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../app/slicess/courseSlice";

export default function NestedViewv({ handelChangeSectionName }) {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [addSubsection, setAddSubsection] = useState(null);
  const [viewSubsection, setViewSubsection] = useState(null);
  const [editSubsection, setEditAddSubsection] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handelDeleteSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseId: course._id,
      token
    })
    if(result){
      dispatch(setCourse(result))
    }
    setConfirmationModal(null);
  };

  //delete current Lecture
  const handelDeleteSubSection = async(subSectionId, sectionId) => {
    const result = await deleteSubSection({subSectionId,sectionId,token});
    if(result){
      //TODO :need extra  logical operation
      dispatch(setCourse(result))
    }
    confirmationModal(null)
  };

  return (
    // <div>
    //   <div>
    //     {course?.courseContent.map((section) => (
    //       <details key={section._id} open>
    //         <summary className="flex items-center justify-between border-b -2 gap-x-3">
    //           <div className="flex items-center gap-x-3">
    //             <RxDropdownMenu />
    //             <p>{section?.sectionName}</p>
    //           </div>
    //           <div className="flex items-center gap-x-3">
    //             <button
    //               onClick={handelChangeSectionName(
    //                 section._id,
    //                 section.sectionName
    //               )}
    //             >
    //               <MdModeEdit />
    //             </button>
    //             <button
    //               onClick={() => {
    //                 setConfirmationModal({
    //                   text1: "Delete this Section",
    //                   text2: "All the lectures in this section will be deleted",
    //                   btn1Text: "Delete",
    //                   btn2Text: "Cancel",
    //                   btn1Handler: () => handelDeleteSection(section._id),
    //                   btn2Handler: () => setConfirmationModal(null),
    //                 });
    //               }}
    //             >
    //               <RiDeleteBin5Line />
    //             </button>
    //             <span>|</span>
    //             <IoMdArrowDropdown className={"text-xl text-richblack-300"} />
    //           </div>
    //         </summary>
    //         <div>
    //           {section.subSection.map((data) => (
    //             <div
    //               key={data?._id}
    //               onClick={() => setViewSubsection(data)}
    //               className="flex items-center justify-between gap-x-3 border-b-2"
    //             >
    //               <div className="flex items-center gap-x-3">
    //                 <RxDropdownMenu />
    //                 <p>{data.title}</p>
    //               </div>

    //               <div className="flex items-center gap-x-3">
    //                 <button
    //                   onCanPlay={() =>
    //                     setEditAddSubsection({
    //                       ...data,
    //                       sectionId: section._id,
    //                     })
    //                   }
    //                 >
    //                   <MdModeEdit />
    //                 </button>
    //                 <button
    //                   onClick={() => {
    //                     setConfirmationModal({
    //                       text1: "Delete this sub Section",
    //                       text2: "Selected Lecture will be deleted",
    //                       btn1Text: "Delete",
    //                       btn2Text: "Cancel",
    //                       btn1Handler: () =>
    //                         handelDeleteSubSection(data._id, section._id),
    //                       btn2Handler: () => setConfirmationModal(null),
    //                     });
    //                   }}
    //                 >
    //                   <RiDeleteBin5Line />
    //                 </button>
    //               </div>
    //             </div>
    //           ))}
    //           <button
    //             onClick={setAddSubsection(section._id)}
    //             className="mt-4 flex items-center gap-x-2 text-yellow-50"
    //           >
    //             <FaPlus />
    //             <p>Add Lecture</p>
    //           </button>
    //         </div>
    //       </details>
    //     ))}
    //   </div>
    //   {addSubsection ? (
    //     <SubSectionModal
    //       modalData={addSubsection}
    //       setModalData={setAddSubsection}
    //       add={true}
    //     />
    //   ) : viewSubsection ? (
    //     <SubSectionModal
    //       modalData={viewSubsection}
    //       setModalData={setViewSubsection}
    //       view={true}
    //     />
    //   ) : editSubsection ? (
    //     <SubSectionModal
    //       modalData={editSubsection}
    //       setModalData={setEditAddSubsection}
    //       edit={true}
    //     />
    //   ) : (
    //     <div></div>
    //   )}
    //   {confirmationModal ? (
    //     <ConfirmationModal modalData={confirmationModal} />
    //   ) : (
    //     <div></div>
    //   )}
    // </div>
    <div>
      nested view section
    </div>
  );
}
