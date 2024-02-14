import React from "react";
import PropTypes from "prop-types";

export default function AnchorTag(props) {
  return (
    <a onClick={props.onClick} className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

AnchorTag.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
