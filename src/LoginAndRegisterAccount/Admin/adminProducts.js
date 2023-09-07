import React, { useState } from "react";
import "./product.css";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const navigate = useNavigate();
  const { Delete, setDelete } = useContext(userDataContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleDelete = (id) => {
    const newList = Delete.filter((value) => value.id !== id);
    setDelete(newList);
    console.log(Delete);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? Delete
      : Delete.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="scroll-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <label htmlFor="mySelect">Category : </label>
              <select
                id="mySelect"
                value={selectedCategory}
                onChange={handleCategoryChange}
                style={{
                  backgroundColor: "#1f1b1b",
                  color: "white",
                }}
              >
                <option value="All">All Products</option>{" "}
                <option value="babycare">Babycare</option>
                <option value="footwear">Footwear & Accessories</option>
                <option value="kidscloths">Kids clothing</option>
              </select>
              <th>Description</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  <img
                    src={value.src}
                    alt="Product 1"
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{value.name}</td>
                <td>{value.category}</td>
                <td>{value.description.slice(0, 30)}...</td>
                <td>{value.price}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => navigate(`/editpage/${value.id}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(value.id);
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
