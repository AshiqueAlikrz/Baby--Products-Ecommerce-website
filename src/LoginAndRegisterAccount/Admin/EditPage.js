import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";
import "./edit.css";
import axios from "axios";

const EditPage = () => {
  const { products, setProducts } = useContext(userDataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);

  // const handleEdit = () => {
  //   const response = axios.put(`http://localhost/api/admin/products/${parsedProductId}`);
  //   console.log(response);
  //   const existingProduct = products.find((product) => product._id === parsedProductId);
  //   setProducts(existingProduct);
  // };

  // const existingProduct = products.find(
  //   (product) => product.id === parsedProductId
  // );

  // const initialFormData = {
  //   src: "",
  //   category: "",
  //   name: "",
  //   description: "",
  //   price: "",
  // };

  // const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const editvalues = {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const src = e.target.src.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const price = e.target.price.value;

    const payload = { id , title, src, category, description, price };
    // console.log(payload);

    const handleEdit = async() => {
      try {
        const response = await axios.put(`http://localhost/api/admin/products`, payload);
        const editProduct=response.data;
        console.log("pro",editProduct);
        // console.log(response);
        const existingProduct = editProduct.find((product) => product._id === id);
        console.log(existingProduct);
        setProducts(existingProduct);
      } catch (err) {
        console.log(err);
      }
    };
    
    handleEdit();
    // console.log(" submitted:", products);

    // const updatedDelete = products.map((product) =>
    //   product.id === id ? { ...product, ...formData } : product
    // );
    // setProducts(updatedDelete);
    // setIsSubmitted(true);
  };

  return (
    <div className="product-form-container">
      {isSubmitted ? (
        <div className="success-message">
          Product details updated successfully.
          <button onClick={() => navigate("/adminproducts")}>Back to Product List</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="src" required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
              <option value="">Select a category</option>
              <option value="Babycare">Babycare</option>
              <option value="Footwear & Accessories">Footwear & Accessories</option>
              <option value="Kids clothing">Kids clothing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="title" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default EditPage;
