import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <section className="hidden md:flex flex-col h-screen bg-[#0158AA] text-white w-[350px]">
      <div className="p-8 flex flex-col">
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <h1 className="text-4xl uppercase first-letter:text-5xl first-letter:text-yellow-500 font-bold tracking-tighter">
              Timeless
            </h1>
            <p className="text-sm text-center font-thin">Work till die</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-6">
          {/* <Link
            to="/"
            className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon icon="ph:user" className="w-6 h-6 text-white" />
            <p className="text-xl font-light">Login</p>
          </Link> */}
          <Link
            to="/home"
            className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon icon="mdi:home-outline" className="w-6 h-6 text-white" />
            <p className="text-xl font-light">Home</p>
          </Link>
          <Link
            to="/categories"
            className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon icon="carbon:diagram" className="w-6 h-6 text-white" />
            <p className="text-xl font-light">Categories</p>
          </Link>
          <Link
            to="/add-user"
            className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon icon="carbon:diagram" className="w-6 h-6 text-white" />
            <p className="text-xl font-light">Add User</p>
          </Link>

          {/* <a href="#" className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon
              icon="ph:user"
              className="w-6 h-6 text-white"
            />
            <p className="text-xl font-light">Users</p>
          </a> */}
          <a
            onClick={(e) => {
              e.preventDefault();
              localStorage.clear();
              navigate("/");
            }}
            className="flex items-center gap-4 hover:bg-blue-800 hover:rounded-xl p-3">
            <Icon icon="ph:user" className="w-6 h-6 text-white" />

            <p className="text-xl font-light">Logout</p>
          </a>
          {/* Add more menu items here */}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
