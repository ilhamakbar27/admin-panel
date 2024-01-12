// import { Form } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
// import Forms from "../components/Forms";

const AddUser = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const navigate = useNavigate();
  const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;

  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(
        `${url}/apis/add-user`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data.data);
      navigate("/home");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      });
    } catch (error) {
        console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
  const handleChange = (field)=> (e) => {
    setForm({...form,[field]:e.target.value})
  }

  return (
    <>
      <div className="flex flex-col w-[50%] px-12 py-24 gap-12">
        <h1 className="text-5xl font-semibold">Add new user</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            onSubmit(form)
        }} className="">
          <div className="grid grid-cols-1 gap-4">
            <div className="">
              <label
                className="block text-gray-700 text-md font-semibold mb-2"
                htmlFor="productName">
                Email
              </label>
              <input
                className="border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                placeholder="Email"
              />
            </div>
            <div className="">
              <label className="block text-md font-semibold mb-2" htmlFor="p">
                Password
              </label>
              <input
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={form.password}
                onChange={handleChange('password')}
                placeholder="Password"
              />
            </div>
            <div className="">
              <label
                className="block text-md text-gray-700 font-semibold mb-2"
                htmlFor="stock">
                Phone Number
              </label>
              <input
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="text"
                placeholder="Phone number"
                onChange={handleChange('phoneNumber')}
                value={form.phoneNumber}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="description">
                Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                // name="description"
                value={form.address}
                onChange={handleChange('address')}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="pt-10">
            <Button />
          </div>
        </form>

        {/* <form
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
      </form> */}
      </div>
    </>
  );
};

export default AddUser;
