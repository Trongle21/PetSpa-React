import PropTypes from "prop-types";

/**
 * @typedef ButtonProps
 *
 * @property {string} className - Lớp CSS cho button.
 * @property {string} content - Nội dung hiển thị trên button.
 *
 */

/**
 * Button component.
 * @param {ButtonProps} props - Thuộc tính của Button.
 * @returns {JSX.Element} - Button component.
 */

const Button = ({ className, content }) => {
  return <button className={className}>{content}</button>;
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Button;
