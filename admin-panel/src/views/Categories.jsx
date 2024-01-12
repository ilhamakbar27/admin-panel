import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Categories = () => {
//   const navigate = useNavigate();
  const url = "https://phase2-aio.vercel.app";
  const token = localStorage.access_token;
  const [categories, setCategories] = useState([]);

  async function category() {
    try {
      const { data } = await axios.get(
        `${url}/apis/branded-things/categories`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories(data.data);
      console.log(data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    }
  }

  useEffect(()=>{
     category()
  },[])
  return <>
<div className="max-w-full overflow-y-auto px-4 pt-10 md:px-8">
            <div className="max-w-full">
                <h3 className="text-gray-800 text-3xl font-bold ">
                    Categories
                </h3>
                <p className="text-gray-600 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="mt-6 shadow-sm border rounded-lg h-[700px] overflow-y-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-lg text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Id</th>
                            <th className="py-3 px-6">Name</th>
                            {/* <th className="py-3 px-6">Position</th>
                            <th className="py-3 px-6">Salary</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-lg divide-y">
                        {
                            categories.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="px-6 py-4 first-letter:uppercase whitespace-nowrap">{item.name}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

  </>;
};

export default Categories;
