import React from "react";
import PropTypes from "prop-types";

export default function Image(props) {
  return (
    <img
      className={props.className}
      width={props.width}
      height={props.height}
      src={props.src}
      alt={props.alt}
    />
  );
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
