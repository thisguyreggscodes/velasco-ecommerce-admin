import React from "react";

const OrderDetailInfo = (props) => {
  const { order } = props;

  if (!order) {
    // If order is null or undefined, you can handle it here
    return <div>No order information available.</div>;
  }

  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Customer</h6>
            <p className="mb-1">
              {order.user ? (
                <>
                  {order.user.name} <br />
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </>
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-truck-moving"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Order info</h6>
            <p className="mb-1">
              Shipping: {order.shippingAddress ? order.shippingAddress.country : "N/A"} <br />
              Pay method: {order.paymentMethod || "N/A"}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1">Deliver to</h6>
            <p className="mb-1">
              Address: {order.shippingAddress ? order.shippingAddress.city : "N/A"}
              <br />
              {order.shippingAddress ? order.shippingAddress.address : "N/A"}
              <br /> {order.shippingAddress ? order.shippingAddress.postalCode : "N/A"}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
