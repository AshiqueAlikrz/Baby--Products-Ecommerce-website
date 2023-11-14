import React from "react";
import { useState } from "react";
import "./addproducts.css";
import { Axios } from "../../App";
import axios from "axios";
import uploadToCloudinary from "./utils/cloudinary";

const AddProdcuts = () => {
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const src = e.target.src.files[0];
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const brand = e.target.brand.value;
    const qty = e.target.qty.value;
    const status = e.target.status.value;

    const imageLink = await uploadToCloudinary(src)

    const payload = { title, description, price, brand, qty, status, category, src: imageLink };

    
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
          <label htmlFor="image">Image File:</label>
          <input type="file" id="src" name="src" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" required>
            <option value="">Select a category</option>
            <option value="Babycare">Babycare</option>
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
