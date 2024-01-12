/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { NUMBER } from "sequelize";
import Swal from "sweetalert2";
import Button from "./Button";

const Forms = ({ onSubmit, name }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    imgUrl: "",
    categoryId: "",
    // authorId: "",
  });
  //   console.log(form);
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const token = localStorage.access_token;
  const url = "https://phase2-aio.vercel.app";
  //   const [productData, setProductData] = useState([]);

  const product = async () => {
    try {
      const { data } = await axios.get(
        `${url}/apis/branded-things/products/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setForm({
        name: data.data.name,
        description: data.data.description,
        price: data.data.price,
        stock: data.data.stock,
        imgUrl: data.data.imgUrl,
        categoryId: data.data.categoryId,
      });
      //   setProductData(data.data);
      //   navigate("/home");
      //   console.log(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };

  //     useEffect(() => {
  //     product();
  //   }, []);

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/branded-things/categories`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //   console.log(data.data);
      setCategories(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log(form);
  };

  useEffect(() => {
    if (name === "Edit Product") {
      //   setForm(product);
      product();
      //   console.log(form);
    } else {
      setForm({
        name: "",
        description: "",
        price: "",
        stock: "",
        imgUrl: "",
        categoryId: "",
      });
    }
    fetchCategories();
  }, []);

  return (
    <>
      <form
        className=" "
        onSubmit={(e) => {
          e.preventDefault();
          form.price = Number(form.price);
          form.stock = Number(form.stock);
          //   form.categoryId=Number(form.categoryId)
          onSubmit(form);
        }}>
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <label
              className="block text-gray-700 text-md font-semibold mb-2"
              htmlFor="productName">
              Product Name
            </label>
            <input
              className=" border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder="Product Name"
            />
          </div>
          <div className="">
            <label
              className="block text-md  font-semibold mb-2"
              htmlFor="price">
              Price
            </label>
            <input
              className=" border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              value={form.price}
              name="price"
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
          <div className="">
            <label
              className="block text-md text-gray-700 font-semibold  mb-2"
              htmlFor="price">
              Stock
            </label>
            <input
              className=" border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="stock"
              type="number"
              value={form.stock}
              name="stock"
              onChange={handleChange}
              placeholder="Stock"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="description">
              Description
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              value={form.description}
              name="description"
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category">
              Category
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              value={form.categoryId}
              name="categoryId"
              onChange={handleChange}>
              <option disabled selected value="">
                --SELECT CATEGORY--
              </option>
              {categories.map((c) => {
                return (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imageUrl">
              Image URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imageUrl"
              type="text"
              value={form.imgUrl}
              name="imgUrl"
              onChange={handleChange}
              placeholder="Image URL"
            />
          </div>
        </div>
        <div className="pt-10">
          <Button
            type="submit"
            >
            {name}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Forms;
