import React, { useState } from "react";
import PathLink from "../../components/PathLink";
import PayBill from "./PayBill";
import PaymentMethods from "./PaymentMethods";
import PayInfo from "./PayInfo";

const SectionPay = () => {
  return (
    <section className="section--pay">
      <div className="container">
        <PathLink content="Payment" />
        <div className="line" />
        <div className="section--pay__wrapper row">
          <PayBill />
          <PaymentMethods />
          <div className="line" />
          <PayInfo f />
        </div>
      </div>
    </section>
  );
};

export default SectionPay;
