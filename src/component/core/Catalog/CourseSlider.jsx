import React from 'react'
import {Swiper ,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination ,FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Course_Card from './Course_Card';
export default function CourseSlider({courses}) {
  return (
    <div>
      {
        courses?.length ?(
          <Swiper>
            {
              courses.map((course,index)=>(
                <SwiperSlide key={index}>
                  <Course_Card course={course} Height={"h-[250px]"}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
        )
        :(<p> No Course Found</p>)
      }
    </div>
  )
}
