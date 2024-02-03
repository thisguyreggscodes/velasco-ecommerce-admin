import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  // Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const calculateItemTotal = (item) => {
    return addDecimals(item.qty * item.price);
  };

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Product</th>
          <th style={{ width: "20%" }}>Unit Price</th>
          <th style={{ width: "20%" }}>Quantity</th>
          <th style={{ width: "20%" }} className="text-end">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="4">Loading...</td>
          </tr>
        ) : (
          order.orderItems.map((item) => (
            <tr key={item._id}>
              <td>
                <Link className="itemside" to="#">
                  <div className="left">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "40px", height: "40px" }}
                      className="img-xs"
                    />
                  </div>
                  <div className="info">{item.name}</div>
                </Link>
              </td>
              <td>Php{item.price}</td>
              <td>{item.qty}</td>
              <td className="text-end">Php{calculateItemTotal(item)}</td>
            </tr>
          ))
        )}

        {!loading && (
          <tr>
            <td colSpan="4">
              <article className="float-end">
                {/* ... (rest of the JSX) */}
              </article>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
