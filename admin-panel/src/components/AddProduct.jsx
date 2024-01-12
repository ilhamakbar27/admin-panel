/* eslint-disable react/prop-types */

import Forms from "./Forms";

// import React from "react";

const AddProduct = ({name}) => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your code here to handle form submission
  // };

  return (
    <>
      <section id="add" className="flex px-20 w-full pb-10 flex-col gap-5">
        <h1 className="font-bold py-10 text-5xl">{name}</h1>
       <Forms/>
      </section>
    </>
  );
};

export default AddProduct;
