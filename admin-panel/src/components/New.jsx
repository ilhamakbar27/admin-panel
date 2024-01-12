import axios from "axios";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./Loading";

const New = () => {
  // const {id} = useParams
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [filter, setFilter] = useState("");
  // const [sort, setSort] = useState("ASC");
  const [isloading, setLoading] = useState(false);
  const url = "https://phase2-aio.vercel.app";
  // const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;

  async function fetchData() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/apis/branded-things/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(data.data);
      console.log(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    } finally {
      setLoading(false);
    }
  }
  // async function fetchData() {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `${url}/apis/pub/branded-things/products?q=&i=${filter}&limit=10&page=${currentPage}&sort=${sort}`
  //     );
  //     setProducts(data.data.query);
  //     // setTotalPage(data.data.pagination.totalPage);

  //     // console.log(data.data.query);
  //   } catch (error) {
  //     Swal.fire({
  //       icon: "error",
  //       title: error.response.data.error,
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // async function fetchCategory() {
  //   try {
  //     const { data } = await axios.get(
  //       `${url}/apis/pub/branded-things/categories`
  //     );
  //     setCategory(data.data);
  //     // console.log(data.data);
  //   } catch (error) {
  //     Swal.fire({
  //       icon: "error",
  //       title: error.response.data.error,
  //     });
  //   }
  // }

  let dataDelete = "";
  const handleDelete = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (confirm.isConfirmed) {
        dataDelete = await axios.delete(
          `${url}/apis/branded-things/products/${id}`,
          {
            headers: { Authorization: `Bearer ${localStorage.access_token}` },
          }
        );
      }
      redirect("/home");
      Swal.fire({
        icon: "success",
        titleText: dataDelete.data.message,
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  };
  useEffect(() => {
    // console.log("<<<<<<<<MASUK BNRO");
    fetchData();
    // fetchCategory();
  }, []);

  return (
    <div className="max-w-full px-4 pb-24 md:px-8">
      <div className="flex items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-3xl font-bold ">All products</h3>
          <p className="text-gray-600 mt-2">
            Work with Purpose, Live with Passion: Finding the Perfect Balance
            ⚖️💼
          </p>
        </div>
        <div
          className="mt-3 py-5
         md:mt-0">
          <Link
            to="/add-product"
            className=" px-4 py-3  text-center  text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm">
            Add product
          </Link>
        </div>
      </div>
      {isloading ? (
        <>
          <div className="mx-auto flex justify-center mt-64 items-center">
            <Loading />
          </div>
        </>
      ) : (
        <div className=" relative max-h-full overflow-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 pr-6">Id</th>
                <th className="py-3 pr-6">Name</th>
                <th className="py-3 pr-6">Image</th>
                <th className="py-3 pr-6">Description</th>
                <th className="py-3 pr-3">Category</th>
                <th className="py-3 pr-6">Price</th>
                <th className="py-3 pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td className="pr-6 py-4 whitespace-nowrap">{item?.id}</td>
                  <td className="pr-6 py-4 whitespace-nowrap">{item?.name}</td>
                  <td className="pr-4 py-4 whitespace-nowrap">
                    <img
                      className="w-20vw rounded-xl h-10vh"
                      src={item.imgUrl}
                      alt=""
                    />
                  </td>
                  <td className="pr-6 w-[50%] py-4 ">
                    <span className="text-xs w-3/5 ">{item.description}</span>
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">
                    {item.categoryId}
                  </td>
                  <td className="pr-6 py-4 whitespace-nowrap">{item.price}</td>
                  <td className="text-right gap-2 whitespace-nowrap">
                    <div className="flex gap-1 flex-col text-center">
                      <Link
                        to={`/edit-product/${item.id}`}
                        className="py-1.5 px-3  text-white hover:text-gray-500 duration-150 hover:bg-gray-50 bg-blue-600 text-md border rounded-lg">
                        Edit
                      </Link>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(item.id);
                        }}
                        className="py-1.5 px-3 text-white bg-red-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                        Delete
                      </a>
                      <Link
                        to={`/edit-image/${item.id}`}
                        className="py-1.5 px-3 text-white hover:text-gray-500 duration-150 hover:bg-gray-50 border bg-yellow-500 rounded-lg">
                        Edit image
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* <p className="text-gray-600 pt-6">
        Work with Purpose, Live with Passion: Finding the Perfect Balance ⚖️💼
      </p> */}
    </div>
  );
};

export default New;
