import { Icon } from "@iconify/react";
// import axios from "axios";
import New from "./New";

// ]
//hrus ada id buat ngemap
const Home = () => {
  // const [name, setName] = useState("")

  return (
    <>
      <div className=" overflow-auto   text-black w-full h-screen gap-5">
        <div className="flex flex-col gap-7">
          <div className="p-8 flex justify-start items-center gap-5">
            <img
              className="object-cover rounded-full w-[130px] h-[130px]"
              src="https://i.pinimg.com/474x/a1/38/0b/a1380b03fb0dd73cbee42c6167821dca.jpg"
              alt=""
            />
            <h1 className=" text-5xl tracking-wide font-semibold">
              Welcome to work Janda!
            </h1>

            <button className="cursor-pointer">
              <Icon
                style={{ color: "[#E5E5E5]" }}
                className="w-6  h-6"
                icon="fluent:pen-20-regular"
              />
            </button>
          </div>

          <New />

          {/* <CustomersTable /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
