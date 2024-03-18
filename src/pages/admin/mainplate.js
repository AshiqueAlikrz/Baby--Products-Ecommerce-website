import React from "react";
import "../../styles/Admin.css";
import {  MDBIcon } from "mdb-react-ui-kit";
import User from "./user";
import AdminProducts from "./adminProducts";
import AddProdcuts from "../../pages/admin/addProdcuts";
import EditPage from "./EditPage";
import Info from "./Info";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const adminproducts = location.pathname.endsWith("/adminproducts");
  const user = location.pathname.endsWith("/user");
  const addproducts = location.pathname.endsWith("/addproducts");
  const editpage = location.pathname.startsWith("/editpage");
  const info = location.pathname.startsWith("/info");

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  const navigate = useNavigate();
  
  return (
    <div>
      <header className="header ">
        <div className="admin-text">
          <h1>Admin Panel</h1>
        </div>

        <div>
          {" "}
          <button className="button-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className="d-flex ">
        <aside className="sidebar">
          <ul>
            <li className="dashboard-text">Dashboard</li>
            <li
              className="section-text "
              onClick={(e) => {
                e.preventDefault();
                navigate("/user");
              }}
            >
              <MDBIcon fas icon="users " size="sm" className="ms-1" />{" "}
              &nbsp;&nbsp;Users
            </li>
            <li
              className="section-text"
              onClick={(e) => {
                e.preventDefault();
                navigate("/adminproducts");
              }}
            >
              {" "}
              <MDBIcon fas icon="list-ul" size="sm" className="ms-1" />{" "}
              &nbsp;&nbsp;Products
            </li>
            <li
              className="section-text"
              onClick={(e) => {
                e.preventDefault();
                navigate("/addproducts");
              }}
            >
              <MDBIcon far icon="plus-square" size="sm" className="ms-1" />
              &nbsp;&nbsp; Add Products
            </li>
          </ul>
        </aside>
        <div className="w-100 content">
          {adminproducts && <AdminProducts />}
          {user && <User />}
          {addproducts && <AddProdcuts />}
          {editpage && <EditPage />}
          {info && <Info />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
