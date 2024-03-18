import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../../context/userDataContext";
import "../../styles/edit.css";
import axios from "axios";
import uploadToCloudinary from "../../utils/cloudinary";

const EditPage = () => {
  const { products } = useContext(userDataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const editproducts = products.find((data) => data._id === id);
  console.log("editproducts", editproducts);

  const [isSubmitted, setIsSubmitted] = useState(false);

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

    const imageLink = await uploadToCloudinary(src);

    const payload = { id, title, src: imageLink, category, description, price, brand, qty, status };

    const handleEdit = async () => {
      try {
        await axios.put("http://localhost:8000/api/admin/products", payload);
        setIsSubmitted(true);
      } catch (err) {
        console.log(err);
      }
    };
    handleEdit();
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
            <input type="file" id="src" name="src" required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" defaultValue={editproducts.category} required>
              <option value="">Select a category</option>
              <option value="Babycare">babycare</option>
              <option value="Footwear & Accessories">Footwear & Accessories</option>
              <option value="Kids clothing">Kids clothing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="title" defaultValue={editproducts.title} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required defaultValue={editproducts.description}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" required defaultValue={editproducts.price} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" required defaultValue={editproducts.status}>
              <option value="popular">popular</option>
              <option value="nopopular">not popular</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="qty">Quantity:</label>
            <input type="number" id="qty" name="qty" required defaultValue={editproducts.qty} />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" required defaultValue={editproducts.brand} />
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
