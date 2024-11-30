import React, { useState } from "react";

const Product_form = () => {
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // add product to your database here
    console.log(formData);
    setFormData("");
  };

  return (
    <div className="bg-white p-2 shadoww-md ">
      <h1 className="font-semibold mb-2 mt-3">Add New Product</h1>
      <form className="">
        <input
          className="m-1 w-full p-1 border"
          type="text"
          placeholder="Product Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="m-1 w-full p-1 border"
          type="number"
          placeholder="Price"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          className="m-1 w-full p-1 border"
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
      </form>
      <button
        onClick={handleSubmit}
        className="bg-blue-700 text-white px-3 py-1 rounded-md mt-2 mb-2 "
        type="submit"
      >
        Add Product
      </button>
    </div>
  );
};

export default Product_form;
