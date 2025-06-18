import React from 'react'
import IconBtn from "./iconBtn"

export default function ConfirmationModal({modalData}) {
  return (
    <div className='text-white z-index-60 mx-auto '>
        <div>
            <p>
                {modalData.text1}
            </p>
            <p>
                {modalData.text2}
            </p>
    <div>
        <IconBtn
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
        />
        <button onClick={modalData?.btn2Handler}>
            {modalData?.btn2Text}
        </button>
    </div>
        </div>
    </div>
  )
}
