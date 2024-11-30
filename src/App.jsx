import { useEffect, useState } from "react";
import "./App.css";
import Product_list from "./component/Product_list";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [products, setProducts] = useState([]);
  const [editModel, setEditModel] = useState(false);

  const getProducts = () => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

  const saveData = async () => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    getProducts();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editModel) {
      saveData();
    } else {
      updateHandler(formData.id);
    }
    setEditModel(false);
    setFormData({
      name: "",
      price: "",
      description: "",
    });
  };

  // console.log(formData);
  const handleEdit = (product) => {
    setEditModel(true);
    setFormData(product);
  };

  const updateHandler = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    getProducts();
  };
  // edit product
  /* const onEditProduct = (product) => {
    setFormData(product);
    setEditModel(true);
  };

  // update product in database
  const onSaveEdit = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // Fetch data again after updating
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    setEditModel(false);
  }; */

  // edit form modal
  console.log(formData);
  return (
    <div className="container mx-auto p-2">
      <h1 className="font-semibold text-xl text-current">Products Dashboard</h1>

      {/* <!-- Create Form --> */}
      <div className="bg-white p-2 shadoww-md ">
        <h1 className="font-semibold mb-2 mt-3">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="m-1 w-full p-1 border"
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="m-1 w-full p-1 border"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <input
            className="m-1 w-full p-1 border"
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <button
            className="bg-blue-700 text-white px-3 py-1 rounded-md mt-2 mb-2 "
            type="submit"
          >
            {editModel ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* <!-- List Products --> */}

      <table className="w-full bg-white shadow rounded-sm mt-5 ">
        <thead className="bg-gray-300">
          <tr>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Description</th>
            <th className="text-left p-3">Price</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product_list
              key={product.id}
              product={product}
              // onDeleteProduct={}
              onEditProduct={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
