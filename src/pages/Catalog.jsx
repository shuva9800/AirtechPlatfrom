import React, { useEffect, useState } from "react";
import Footer from "../component/common/Footer";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/api";
import getCatalogPageData from "../services/operations/getCatalogPageData";

export default function Catalog() {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [catagoryId, setCatagoryId] = useState("");

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
    }
    getCatagoryDetails();
  }, [catagoryId]);

  return (
    <div>
      <div>
        <p>{`Home/Catalog`} <span></span></p>
        <p></p>
        <p></p>
      </div>

      <div>
        {/* section 1 */}
        <div>
          <div className="flex gap-9">
            <p>Most Popular</p>
            <p>New</p>
          </div>
          {/* <CourseSlider /> */}
        </div>
        {/* Section2 */}
        <div>
          <p>Top Courses</p>
          <div>
            {/* <CourseSlider /> */}
          </div>
        </div>
        {/* section 3 */}
        <div>
          <p>Frequintly Bought Together</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
