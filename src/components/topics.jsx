import React from "react";
import PropTypes from "prop-types";
import { topics } from "./blogs";
import AnchorTag from "./anchor-tag";

export default function Topics(props) {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {topics.map((topic, index) => (
          <AnchorTag
            key={index}
            id={index}
            className={
              props.activeTopic === topic
                ? "nav-item nav-link link-body-emphasis active"
                : "nav-item nav-link link-body-emphasis"
            }
            href="#"
            onClick={() => props.onClick(topic)}
          >
            {topic}
          </AnchorTag>
        ))}
      </nav>
    </div>
  );
}

Topics.propTypes = {
  isActive: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onClick: PropTypes.func.isRequired,
  activeTopic: PropTypes.string.isRequired,
};
