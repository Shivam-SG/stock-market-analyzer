import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/product/get-product"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    const newValue = name === "imageUrl" ? files[0] : value;

    setProduct({ ...product, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("imageUrl", product.imageUrl);

    try {
      const response = await fetch(
        "http://localhost:5000/api/product/create-product",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div data-theme="light">
      <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">ADD POST</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="imageUrl"
              onChange={handleInputChange}
              accept="image/*"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <hr />
      <div className=" mx-auto mt-4 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">PREVIOUS POST</h2>
        <div className="product-list">
          {products.map((product, index) => {
            return (
              <div key={product._id} className="product-card border-2 border-gray-400 border-solid rounded-lg p-4 mb-5">
                <div className="product-img">
                  <img
                    src={`http://localhost:5000/api/product/get-productphoto/${product._id}`}
                    alt={product.name}
                  />
                </div>
                <div className="product-name">
                  <h1 className="text-xl font-semibold mt-9 m-4">
                    {product.name}
                  </h1>
                </div>
                <div className="product-desc">
                  <p>{product.description}</p>
                </div>
                <div className="product-button"></div>
                <hr className="mt-4 mb-4"/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
