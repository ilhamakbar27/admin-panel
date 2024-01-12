// import AddProduct from "../components/AddProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Forms from "../components/Forms";
// import Home from "../components/home";
// import Sidebar from "../components/sidebar";

// import React from 'react'

export const Add = () => {
  const navigate = useNavigate();
  const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${url}/apis/branded-things/products`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data.data);
      navigate("/home");
      // await axios.post(`${url}/apis/branded-things/products`, formData)
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };

  return (
    <>
      <section id="add" className="flex px-20 w-full pb-10 flex-col gap-5">
        <h1 className="font-bold py-10 text-5xl">Add Product</h1>
        <Forms name={"Add Product"} onSubmit={onSubmit} />
        {/* <Forms name={"Add Product"} onsubmit={({name}) =? {
       }} /> */}
      </section>
      {/* <Loginpage/> */}
    </>
  );
};
