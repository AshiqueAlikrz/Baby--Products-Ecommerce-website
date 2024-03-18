import React, { useEffect } from "react";
import "../../styles/user.css";
import { useContext } from "react";
import { userDataContext } from "../../context/userDataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = () => {
  const navigate = useNavigate();

  const {users, setusers}=useContext(userDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get( "http://localhost:8000/api/admin/users");
        setusers(userData.data.data);
     console.log("adminusers",users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [users]);

  return (
    <div>
      <div className="user-details-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>No. of Orders</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <React.Fragment key={index}>
                <tr key={user._id}>
                  <>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.orders.length}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => navigate(`/info/${user._id}/${user.name}/${user.email}`)}
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
