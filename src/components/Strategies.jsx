import React, { useEffect, useState } from "react";
import axios from "axios";


const Strategies = () => {
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
  return (
    <div className=" mx-auto p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">All New Strategies</h2>
        <div className="product-list">
          {products.map((product, index) => {
            return (
              <div key={product._id} className="product-card border-4 border-gray-400 border-solid rounded-lg p-4 mb-9">
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
  );
};

export default Strategies;
