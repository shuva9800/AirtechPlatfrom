import React from 'react'
import toast from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { catalogData } from '../api';
export default async function getCatalogPageData (catagoryId) {
  const toastId = toast.loading("Loading.....")
  let result = [];

try{
  const response = await apiConnector("POST",catalogData.CATALOGPAGEDATA_API, {catagoryId: catagoryId})
    
  if(!response?.data?.success){
    throw new Error("Could not fetch Catagory page data")
  }
  result = response?.data
}

catch(error){
  console.log("Catalog Page data Api error",error)
 toast.error(error.message);
 result = error.response?.data
}
toast.dismiss(toastId);
return result;

}
