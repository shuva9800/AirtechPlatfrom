import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxDropdownMenu } from "react-icons/rx";

export default function NestedViewv() {
  const {course} = useSelector((state)=>state.course);
  const {token}= useSelector((state)=>state.auth);
  const dispatch = useDispatch();
  const [addSubsection ,setAddSubsection] = useState(null);
  const [viewSubsection ,setViewSubsection] = useState(null);
  const [editSubsection ,setEditAddSubsection] = useState(null);
const [confirmationModal , setConfirmationModal]= useState(null)
  return (
    <div>
      <div>
        {
          course?.courseContent.map((section)=>(
            <details key={section._id} open>
                <summary>
                  <div>
                    <RxDropdownMenu />
                    <p>{section?.sectionname}</p>
                  </div>
                </summary>
            </details>
          ))
        }
      </div>
    </div>
  )
}
