import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Login = () => {
  const navigate = useNavigate();
  const [initialDataLogin, setLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const url = "https://phase2-aio.vercel.app";

  const handleChange = (field) => (e) => {
    setLogin({ ...initialDataLogin, [field]: e.target.value });
    console.log(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await wait(1000);
      let { data } = await axios.post(`${url}/apis/login`, initialDataLogin);
      localStorage.setItem("access_token", data.data.access_token);
      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
    } finally{
        setLoading(false)
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-yellow-600 h-screen flex flex-col">
        <div className="container max-w-md mx-auto  flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-black w-full">
            <form onSubmit={handleLogin} action="/login" method="post">
              <h1 className="text-5xl text-center uppercase first-letter:text-5xl first-letter:text-yellow-500 font-bold tracking-tighter">
                Timeless
              </h1>
              <p className="text-sm text-center font-thin">Work till die</p>
              <h1 className=" text-3xl py-6 mb-10 font-bold text-center text-gray-800">
                Welcome Back!
              </h1>
              {/* <p className="text-red-600 mb-10 flex justify-center items-center"></p> */}
              <input
                type="email"
                required
                className="block border border-gray-300 w-full py-3 px-4 rounded mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={initialDataLogin.email}
                onChange={handleChange("email")}
                placeholder="Email"
              />
              <input
                type="password"
                required
                className="block border border-gray-300 w-full py-3 px-4 rounded mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={initialDataLogin.password}
              />

              <button
                type="submit"
                className="w-full py-3 rounded bg-gradient-to-r from-purple-400 via-blue-600 to-blue-600 text-white font-semibold hover:bg-indigo-700 focus:outline-none my-1">
                {loading ? <Loading /> : "Login"}
              </button>
            </form>
          </div>
          {/* <div className="text-black mt-6">
            Dont have an account?
            <a
              className="no-underline border-b border-blue-300 text-blue-800"
              href="/register">
              Register
            </a>
            .
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
