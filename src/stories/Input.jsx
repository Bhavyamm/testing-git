import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({ primary, type, label, ...props }) => {
  const mode =
    type === "default"
      ? "storybook-input--default"
      : "storybook-input--red-border";
  return (
    <input className={["storybook-input", mode].join(" ")} {...props} label />
  );
};

Input.propTypes = {
  primary: PropTypes.bool,
  type: PropTypes.oneOf(["default", "red-border"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Input.defaultProps = {
  primary: false,
  type: "default",
  label: "Type something...",
  onClick: undefined,
};
