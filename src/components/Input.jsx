// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef InputProps
 *
 * @property {string} className - Lớp CSS cho input.
 * @property {string} type - Type của input.
 * @property {string} name - name của input.
 * @property {string} placeholder - placeholder của input
 *
 */

/**
 * Button component.
 * @param {InputProps} props - Thuộc tính của Iput.
 * @returns {JSX.Element} - Button component.
 */

const Input = ({ className, name, placeholder, type }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
