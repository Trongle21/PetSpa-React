import React, { useState } from "react";
import PathLink from "../../components/PathLink";
import PayInfo from "./PayInfo";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormControl from "../../components/FormControl";
import useAppContext from "../../hooks/useAppContext";
import { data } from "jquery";

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
    paymentMethod: z
      .string()
      .min(1, { message: " vui lòng trọn hình thức thanh toán" }),
  }),
});

const SectionPay = () => {
  const [chooseCountry, setChooseCountry] = useState("Viet Nam");
  const [choosePayment, setChoosePayment] = useState("bank transfer");

  const { onTakeInfoUser } = useAppContext();

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
    onTakeInfoUser(data);
  };

  const handleCheckboxChange = (check) => {
    setChoosePayment(check);
  };

  return (
    <section className="section--pay">
      <div className="container">
        <PathLink content="Payment" />
        <div className="line" />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => {
              data.info.country = chooseCountry;
              data.info.paymentMethod = choosePayment;
              handleTakeData(data);
            })}
          >
            <div className="section--pay__wrapper row">
              <div className="section--pay__bill l-4 m-4 c-12">
                <div
                  className="section--pay__bill--wrapper"
                  onSubmit={methods.handleSubmit((data) => {
                    data.info.country = chooseCountry;
                    handleTakeData(data);
                  })}
                >
                  <h3>Information</h3>
                  <FormControl
                    label="Email"
                    name="info.email"
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
                </div>
              </div>

              <div className="payment--methods l-4 m-4 c-12">
                <div className="payment--methods__wrapper">
                  <h3>Payment methods</h3>
                  <div className="payment checkbox">
                    <FormControl
                      label="Bank Transfer"
                      id="bank transfer"
                      type="radio"
                      name="info.paymentMethod"
                      onChange={() => handleCheckboxChange("bank transfer")}
                      checked={choosePayment === "bank transfer"}
                    />
                  </div>
                  <div className="payment checkbox">
                    <FormControl
                      label="Delivery"
                      id="delivery"
                      type="radio"
                      name="info.paymentMethod"
                      onChange={() => handleCheckboxChange("delivery")}
                      checked={choosePayment === "delivery"}
                    />
                  </div>
                </div>
              </div>
              <div className="line" />
              <PayInfo />
            </div>
            <div className="payment--btn">
              <button type="submit" className="btn btn--primary">
                Pay now
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default SectionPay;
