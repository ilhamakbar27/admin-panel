// import EditProduct from "../components/EditProduct";
import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Forms from "../components/Forms";
// import Home from "../components/home";

// import React from 'react'

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;
//   const [productData, setProductData] = useState([]);



//   useEffect(() => {
//     product();
//   }, []);

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.put(
        `${url}/apis/branded-things/products/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/home");
      console.log(data.data);
      Swal.fire({
        icon:"success",
        titleText:data.message
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };

  //   useEffect(() => {
  //     // product();
  //   }, []);

  return (
    <>
      <section id="add" className="flex px-20 w-full pb-10 flex-col gap-5">
        <h1 className="font-bold py-10 text-5xl">Edit Product</h1>
        <Forms
          name={"Edit Product"}
          onSubmit={onSubmit}
        //   product={productData}
        />
      </section>
      {/* <Loginpage/> */}
    </>
  );
};
