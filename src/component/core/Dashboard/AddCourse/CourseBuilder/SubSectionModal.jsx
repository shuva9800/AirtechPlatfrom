import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SubSectionModal({
  modalData,
  setModalData,
  add=FaSearchengin,
  view=false,
  edit=false

})
{
    const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loading , setLoading]= useState(false);
   const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(view || edit){
      setValue("lectureTitle", modalData.title)
    }
  })

  return (
    <div>
      <div>
            <div>
                <p>{view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture</p>
                <button onClick={() => (!loading ? setModalData(null): {})}>
                    <RxCross1 />
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
                    viewData={view ? modalData.videoUrl: null}
                    editData={edit ? modalData.videoUrl: null}
                />
                <div>
                    <label>Lecture Title</label>
                    <input 
                        id='lectureTitle'
                        placeholder='Enter Lecture Title'
                        {...register("lectureTitle", {required:true})}
                        className='w-full'
                    />
                    {errors.lectureTitle && (<span>
                        Lecture Title is required
                    </span>)}
                </div>
                <div>
                    <label>Lecture Description</label>
                    <textarea 
                        id='lectureDesc'
                        placeholder='Enter Lecture Description'
                        {...register("lectureDesc", {required:true})}
                        className='w-full min-h-[130px]'
                    />
                    {
                        errors.lectureDesc && (<span>
                            Lecture Description is required
                        </span>)
                    }
                </div>

                {
                    !view && (
                        <div>
                            <IconBtn 
                                text={loading ? "Loading...": edit ? "Save Changes" : "Save"}
                            />
                        </div>
                    )
                }
            </form>
        </div>

    </div>
  )
}
