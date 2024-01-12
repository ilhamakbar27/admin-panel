import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// import Button from "../components/Button";

import Swal from "sweetalert2";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";

const Editimg = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isloading, setLoading] = useState(false);
  const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `${url}/apis/branded-things/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  }
  const handleSubmit = async (e) => {
    try {
      let files = e.target.files[0];
      e.preventDefault();
      let formData = new FormData();
      formData.append(`file`, files);

      const { data } = await axios.patch(
        `${url}/apis/branded-things/products/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(true);
      navigate("/home");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className=" px-10 flex flex-col gap-12 w-[70%]">
        <h1 className="text-5xl pt-20 justify-start flex font-semibold">
          Edit Image
        </h1>
        <p className=" first-line:text-2xl first-letter:text-4xl first-line:italic first-line:tracking-tighter first-line:font-[300] text-gray-700">
          Lorem ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Corporis, officiis! Perspiciatis repudiandae officiis quam error
          iusto eius. sit amet consectetur adipisicing elit. Quas natus iste
          ipsam veritatis odit aliquam laborum itaque voluptatibus repellendus
          sequi?
        </p>

        <div className="flex justify-between gap-10 ">
          <img
            className="object-cover w-full rounded-2xl h-[300px] "
            src={products.imgUrl}
            alt=""
          />
          {isloading ? (
            <>
              <div className="pt-64 mx-auto">
                <Loading />
              </div>
            </>
          ) : (
            <label
              htmlFor="dropzone-file"
              // onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                onChange={handleSubmit}
                className="hidden"
              />
              {/* <Button /> */}
            </label>
          )}
        </div>
      </div>
    </>
  );
};

export default Editimg;
