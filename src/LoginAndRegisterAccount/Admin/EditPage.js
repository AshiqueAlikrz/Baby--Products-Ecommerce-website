import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";
import "./edit.css";

const EditPage = () => {
  const { Delete, setDelete } = useContext(userDataContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const parsedProductId = parseInt(id);
  const existingProduct = Delete.find(
    (product) => product.id === parsedProductId
  );

  const initialFormData = existingProduct || {
    src: "",
    category: "",
    name: "",
    description: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    const updatedDelete = Delete.map((product) =>
      product.id === parsedProductId ? { ...product, ...formData } : product
    );
    setDelete(updatedDelete);
    setIsSubmitted(true);
  };

  return (
    <div className="product-form-container">
      {isSubmitted ? (
        <div className="success-message">
          Product details updated successfully.
          <button onClick={() => navigate("/adminproducts")}>
            Back to Product List
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="src"
              value={formData.src}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Babycare">Babycare</option>
              <option value="Footwear & Accessories">
                Footwear & Accessories
              </option>
              <option value="Kids clothing">Kids clothing</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
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
