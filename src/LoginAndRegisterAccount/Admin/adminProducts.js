import React, { useState } from "react";
import "./product.css";
import { useContext, useEffect } from "react";
import { userDataContext } from "../../userDataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProducts = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(userDataContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get("http://localhost:8000/api/admin/products");
        setProducts(productData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setProducts]);
  console.log("productData", products);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/admin/products/${id}`);
      const newList = products.filter((product) => product._id !== id);
      setProducts(newList);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);
  // console.log("filteredProducts",filteredProducts);
  return (
    <div>
      <div className="scroll-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
              <th>Quantity</th>
              <th>Brand</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((value) => (
              <tr key={value._id}>
                <td>{value._id}</td>
                <td>
                  <img src={value.src} alt="Product 1" style={{ width: "100px", height: "100px" }} />
                </td>
                <td>{value.title}</td>
                <td>{value.category}</td>
                <td>{value.description.slice(0, 30)}...</td>
                <td>{value.price}</td>
                <td>{value.status}</td>
                <td>{value.qty}</td>
                <td>{value.brand}</td>
                <td>
                  <button className="edit-button" onClick={() => navigate(`/editpage/${value._id}`)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(value._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminProducts;
