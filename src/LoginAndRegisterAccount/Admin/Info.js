import React, { useContext } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { userDataContext } from "../../userDataContext";
import { useParams } from "react-router-dom";
import "./Info.css";

const Info = () => {
  const { users } = useContext(userDataContext);
  const { id } = useParams();
  const idchk = Number(id);

  console.log("userInfo",users);
  
  const userInfo = users.find((user) => user.id === idchk);

  return (
    <div>
    {/* <div className="d-flex flex-column align-items-center pt-3 ">
      <div className="d-flex align-items-center gap-3">
        <MDBIcon
          fas
          icon="user-circle"
          className="text-muted"
          style={{ fontSize: "100px" }}
        />
        <div className="d-flex flex-column">
          <h3>{userInfo.name}</h3>
          <h6>{userInfo.email}</h6>
        </div>
      </div>
      <div className="dashboard-table mt-4 user-details-admin w-100 ">
        <table className="w-100 ">
          <thead className="text-center">
            <tr>
              <td>Order ID</td>
              <td>Product Name</td>
              <td>Unit Price</td>
              <td>Quantity</td>
              <td>Total Price</td>
            </tr>
          </thead>
          <tbody className="text-center">
            {userInfo.orders.map((order, index) => (
              <tr key={order.orderId}>
                <td>{order.orderId + 1}</td>
                <td>{order.items}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                {index === 0 && (
                  <td rowSpan={userInfo.orders.length}>
                    ₹ 
                    {userInfo.orders.reduce(
                      (total, order) => total + order.price * order.quantity,
                      0
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> */}
    </div>
  );
};

export default Info;
