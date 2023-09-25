import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

/**
 * @typedef FormControlProps
 *
 * @property {string} htmlFor - Xác định nhãn liên quan.
 * @property {string} content - Nội dung hiển thị.
 * @property {string} name - name.
 * @property {string} type - Kiểu.
 * @property {string} placeholder - Nội dung hiển thị trong placeholder.
 *
 */

/**
 * Button component.
 * @param {FormControlProps} props - Thuộc tính của Form.
 * @returns {JSX.Element} - Form component.
 */

const FormControl = ({ label, name, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="main--account__form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      <span className="form-message">
        <ErrorMessage errors={errors} name={name} />
      </span>
    </div>
  );
};

FormControl.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormControl;
