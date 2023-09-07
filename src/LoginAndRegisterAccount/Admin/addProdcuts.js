import React from "react";
import { useState } from "react";
import "./addproducts.css";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";

const AddProdcuts = () => {
  const { Delete, setDelete } = useContext(userDataContext);
  const [formData, setFormData] = useState({
    name: "",
    src: "",
    category: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Delete.length + 1,
      name: formData.name,
      src: formData.src,
      category: formData.category,
      description: formData.description,
      price: formData.price,
      qty: 1,
    };
    setDelete([...Delete, newProduct]);
    setFormData({
      name: "",
      src: "",
      category: "",
      description: "",
      price: "",
    });

    console.log(newProduct);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
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
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="src"
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
            <option value="babycare">Babycare</option>
            <option value="footwear & Accessories">
              Footwear & Accessories
            </option>
            <option value="Kids clothing">Kids clothing</option>
          </select>
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
        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProdcuts;
