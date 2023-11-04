import React from "react";
import { useState } from "react";
import "./addproducts.css";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";
import axios from "axios";

const AddProdcuts = () => {
  const { Delete, setDelete } = useContext(userDataContext);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   src: "",
  //   category: "",
  //   description: "",
  //   price: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const src = e.target.src.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const brand = e.target.brand.value;
    const qty = e.target.qty.value;
    const status = e.target.status.value;

    const payload = { title, description, price, brand, qty, status, category, src };

    
    const response = await axios.post("http://localhost:8000/api/admin/products", payload);
    alert("product created successfully")
    console.log("response",response);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="src" name="src" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" required>
            <option value="">Select a category</option>
            <option value="babycare">Babycare</option>
            <option value="footwear & Accessories">Footwear & Accessories</option>
            <option value="Kids clothing">Kids clothing</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" required />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" required />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" required>
            <option value="popular">popular</option>
            <option value="nopopular">not popular</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="qty">Quantity:</label>
          <input type="number" id="qty" name="qty" required />
        </div>
        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProdcuts;
