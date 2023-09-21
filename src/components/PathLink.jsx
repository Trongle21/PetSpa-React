// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

/**
 * @typedef PathLinkProps
 *
 * @property {string} content - Trang hiện tại
 */

/**
 *
 * @param {PathLinkProps} props  - Thuộc tính PathLink
 * @returns {JSX.Element} - PathLink components
 */

const PathLink = ({ content }) => {
  return (
    <div className="path--link">
      <a href="/">Home</a>
      <i className="fa-solid fa-chevron-right"></i>
      <h6>{content}</h6>
    </div>
  );
};

PathLink.propTypes = {
  content: PropTypes.string,
};

export default PathLink;
