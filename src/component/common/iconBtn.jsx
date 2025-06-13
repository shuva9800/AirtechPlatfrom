import React from 'react'

export default function iconBtn({text , onclick, clildren,disabled ,outline=false, customClasses, type}) {
  return (
    <button 
    disabled ={disabled}
    onClick={onclick}
    type={type}>
        {
            clildren? (
                <>
                    <span>
                {text}
            </span>
            {clildren}
                </>
            ): (text)
        }
    </button>
  )
}
