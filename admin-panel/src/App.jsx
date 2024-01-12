// import AddProduct from "./components/AddProduct";

// import Home from "./components/home";
// import Loginpage from "./components/Loginpage";
// import Sidebar from "./components/sidebar";
import { RouterProvider } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
