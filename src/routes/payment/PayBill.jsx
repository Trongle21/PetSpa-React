import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "./FormControl";

// /**
//  * @typedef PayBillProps
//  *
//  * @property {func} paymentMethod - function
//  *
//  */

// /**
//  * @param {PayBillProps}  - Thuộc tính của PayBill
//  *
//  * @returns {JSX.Element} - PayBill component
//  *
//  */

const contactForm = z.object({
  info: z.object({
    email: z
      .string({ required_error: "Bạn chưa nhập tên" })
      .email({ message: "Email không hợp lệ" }),
    name: z
      .string({ required_error: "Bạn chưa nhập tên" })
      .trim()
      .min(6, { message: "Name phải tối thiểu 6 ký tự" }),
    phone_number: z
      .string({ required_error: "Bạn chưa số điện thoại" })
      .min(8, { message: "Số điện thoại tối thiểu 8 số" })
      .max(11, { message: "Số điện thoại tối đa 10 số" }),
    address: z
      .string({ required_error: "Bạn chưa nhập địa chỉ" })
      .trim()
      .min(1, { message: "Vui lòng nhập địa chỉ" }),
  }),
});

const PayBill = () => {
  const [chooseCountry, setChooseCountry] = useState("Viet Nam");

  const methods = useForm({
    resolver: zodResolver(contactForm),
    defaultValues: {
      info: {
        email: "",
        name: "",
        phone_number: "",
        address: "",
      },
    },
  });

  const handleTakeData = (data) => {
    console.log(data);
  };

  return (
    <div className="section--pay__bill l-4 m-4 c-12">
      <FormProvider {...methods}>
        <form
          className="section--pay__bill--wrapper"
          onSubmit={methods.handleSubmit((data) => {
            data.info.country = chooseCountry;
            // data.info.paymentMethod = paymentMethod;
            handleTakeData(data);
          })}
        >
          <h3>Information</h3>
          <FormControl
            label="Email"
            name="info.name"
            placeholder="Enter your email"
          />
          <FormControl
            label="Name"
            name="info.name"
            placeholder="Enter your Name"
          />
          <FormControl
            label="Phone number"
            name="info.phone_number"
            placeholder="Enter your phone number"
          />
          <div className="main--account__form-group">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              name="country"
              id="country"
              value={chooseCountry}
              onChange={(e) => setChooseCountry(e.target.value)}
            >
              <option value="Viet Nam">Viet Nam</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="Singapore">Singapore</option>
            </select>
            <span className="form-message"></span>
          </div>
          <FormControl
            label="Address"
            name="info.address"
            placeholder="Enter your phone address"
          />
          <div className="payment--btn">
            <button type="submit" className="btn btn--primary">
              Pay now
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

// PayBill.propTypes = {
//   paymentMethod: PropTypes.func(),
// };

export default PayBill;
