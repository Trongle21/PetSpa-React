// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef ImageProps
 *
 * @property {string} src - Đường dẫn link ảnh.
 * @property {string} alt - alt của ảnh.
 *
 */

/**
 * Button component.
 * @param {ImageProps} props - Thuộc tính của IMAGE.
 * @returns {JSX.Element} - IMAGE component.
 */

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
