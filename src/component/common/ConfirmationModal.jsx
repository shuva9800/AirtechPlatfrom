import React from 'react'
import IconBtn from "./iconBtn"

export default function ConfirmationModal({modalData}) {
  return (
    <div>
        <div>
            <p>
                {modalData.text1}
            </p>
            <p>
                {modalData.text2}
            </p>
    <div>
        <IconBtn
            onclick={modalData?.btnHandler}
            text={modalData?.btn1Text}
        />
        <button onClick={modalData?.ntn2Handler}>
            {modalData?.btn2Text}
        </button>
    </div>
        </div>
    </div>
  )
}
