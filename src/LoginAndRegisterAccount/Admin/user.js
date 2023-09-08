import React from "react";
import "./user.css";
import { useContext } from "react";
import { userDataContext } from "../../userDataContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const { Profile, } = useContext(userDataContext);

  const filteredProfile = Profile.filter((user) => user.role !== "admin");

  return (
    <div>
      <h1>hello user</h1>
      <div className="user-details-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>No. of Items</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfile.map((user) => (
              <React.Fragment key={user.id}>
                <tr key={user.id}>
                  <>
                    <td>{user.id }</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.orders.length}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => navigate(`/info/${user.id}`)}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          borderRadius: "4px",
                          padding: "10px 20px",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Info
                      </button>
                    </td>
                  </>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
