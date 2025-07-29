import React, { useEffect, useState } from "react";
import Footer from "../component/common/Footer";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/api";
import getCatalogPageData from "../services/operations/getCatalogPageData";
import CourseSlider from "../component/core/Catalog/CourseSlider";
import Course_Card from "../component/core/Catalog/Course_Card";

export default function Catalog() {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [catagoryId, setCatagoryId] = useState("");
  console.log(catalogPageData);

  //fetch all catagories
  useEffect(() => {
    const getAllCatagory = async () => {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      const catagory_id = res?.data?.allCatagory?.filter(
        (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
      )[0]._id;
      setCatagoryId(catagory_id);
    };
    getAllCatagory();
  }, [catalogName]);

  useEffect(() => {
    const getCatagoryDetails = async () => {
      try {
        const res = await getCatalogPageData(catagoryId);
        setCatalogPageData(res);
      } catch (error) {
        console.log(error);
      }
    };
    if(catagoryId){
        getCatagoryDetails();
    }
    
  }, [catagoryId]);

  return (
    <div>
      <div>
        <p>
          {`Home/Catalog/`}{" "}
          <span>{catalogPageData?.data?.selectedCatagory.name}</span>
        </p>
        <h1>{catalogPageData?.data?.selectedCatagory.name}</h1>
        <p>{catalogPageData?.data?.selectedCatagory.description}</p>
      </div>

      <div>
        {/* section 1 */}
        <div>
          <div>Courses to get you started</div>
          <div className="flex gap-9">
            <p>Most Popular</p>
            <p>New</p>
          </div>
          <div>
            <CourseSlider
              courses={catalogPageData?.data?.selectedCatagory?.course}
            />
          </div>
          {/* <CourseSlider /> */}
        </div>
        {/* Section2 */}
        <div>
          <div>
            Top Courses in {catalogPageData?.data?.selectedCatagory.name}
          </div>
          <p>Top Courses</p>
          <div>
            <CourseSlider
              courses={catalogPageData?.data?.differentCategory?.course}
            />
          </div>
        </div>
        {/* section 3 */}
        <div>
          <div>Frequintly Bought </div>
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {catalogPageData?.data?.mostSellingCourses
                ?.slice(0, 4)
                .map((course, index) => (
                  <Course_Card
                    course={course}
                    key={index}
                    Height={"h-[400px]"}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
