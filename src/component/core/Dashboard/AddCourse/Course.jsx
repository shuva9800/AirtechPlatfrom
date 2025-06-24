import React from 'react'
import RenderSteps from './RenderSteps'

export default function Course() {
  return (
    <div>
        <div className='flex gap-3'>
            <div>
                <h1>Add Course</h1>
                <div>
                   <RenderSteps/> 
                </div>
            </div>
            <div>
                <p>Course Upload Tips</p>
                <ul>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                    <li>Set the Course Price option or make it free.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
