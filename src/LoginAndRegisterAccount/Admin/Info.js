import React, { useContext, useEffect, useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { userDataContext } from "../../userDataContext";
import { useParams } from "react-router-dom";
import "./Info.css";
import axios from "axios";

const Info = () => {
  const { users, setOrders, orders } = useContext(userDataContext);
  const { id, name ,email} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userId = id;
      const response = await axios.get(`http://localhost:8000/api/user/${userId}/orders`);
      setOrders(response.data.data);
      console.log("orders", orders)
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <div className="d-flex flex-column align-items-center pt-3 ">
        <div className="d-flex align-items-center gap-3">
          <MDBIcon fas icon="user-circle" className="text-muted" style={{ fontSize: "100px" }} />
          <div className="d-flex flex-column">
            <h3>{name}</h3>
            <h6>{email}</h6>
          </div>
        </div>
        <div className="dashboard-table mt-4 user-details-admin w-100 ">
          <table className="w-100">
            <thead className="text-center">
              <tr>
                <td>Order ID</td>
                <td>Order Date</td>
                <td>Product Name</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Total Price</td>
              </tr>
            </thead>
            <tbody className="text-center">
              {orders.map((order, orderIndex) => (
                <React.Fragment key={orderIndex}>
                  {order.products.map((product, productIndex) => (
                    <tr key={`${orderIndex}-${productIndex}`}>
                      {productIndex === 0 && (
                        <>
                          <td rowSpan={order.products.length}>{order.order_id}</td>
                          <td rowSpan={order.products.length}>{order.date}</td>
                        </>
                      )}
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      {productIndex === 0 && (
                        <>
                          <td rowSpan={order.products.length}>{order.total_amount}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default Info;
