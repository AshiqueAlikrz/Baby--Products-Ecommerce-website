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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    src: "",
    category: "",
    title: "",
    description: "",
    price: "",
    status: "popular",
    qty: "",
    brand: "",
  });

  const editvalues = {};

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

    setFormData({
      ...formData,
      src,
      category,
      title,
      description,
      price,
      brand,
      qty,
      status,
    });

    const payload = { id, title, src, category, description, price, brand, qty, status };

    setFormData({
      ...formData,
      src,
    });

    console.log("formData: ", payload.src);

    const handleEdit = async () => {
      try {
        const response = await axios.put("http://localhost:8000/api/admin/products", payload);
        // const editProduct=response.data;
        console.log("pro", response);
        // console.log(response);
        // const existingProduct = editProduct.find((product) => product._id === id);
        // console.log(existingProduct);
        // setProducts(existingProduct);
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
            <input
              type="text"
              id="image"
              name="src"
              required
            />
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
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" required />
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
