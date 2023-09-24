// eslint-disable-next-line no-unused-vars
import React from "react";
// import PropTypes from "prop-types";

// /**
//  * @typedef PaymentMethodsProps
//  *
//  * @property {func} paymentMethod - function
//  * @property {func} setPaymentMethod - function
//  *
//  */

// /**
//  * @param {PaymentMethodsProps}  - Thuộc tính của PaymentMethods
//  *
//  * @returns {JSX.Element} - PaymentMethods component
//  *
//  */

const PaymentMethods = () => {
  return (
    <div className="payment--methods l-4 m-4 c-12">
      <div className="payment--methods__wrapper">
        <h3>Payment methods</h3>
        <label htmlFor="bank" type="bank" className="payment bank--transfer">
          <input type="checkbox" name="bank" id="bank--transfer" />
          <label htmlFor="delivery">Delivery</label>
        </label>
        <label htmlFor="delivery" className="payment delivery">
          <input type="checkbox" name="delivery" id="delivery" />
          <label htmlFor="bank">Bank transfer</label>
        </label>
      </div>
    </div>
  );
};

// PaymentMethods.propTypes = {
//   paymentMethod: PropTypes.func(),
//   setPaymentMethod: PropTypes.func(),
// };

export default PaymentMethods;
