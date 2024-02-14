import React, { useState } from "react";
import AnchorTag from "./anchor-tag";
import PropTypes from "prop-types";
import { topics } from "./blogs";

function Topic({ topic, isActive, onClick }) {
  return (
    <AnchorTag
      onClick={() => onClick(topic)}
      className={
        isActive
          ? "nav-item nav-link link-body-emphasis active"
          : "nav-item nav-link link-body-emphasis"
      }
      href="#"
    >
      {topic}
    </AnchorTag>
  );
}

Topic.propTypes = {
  topic: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Topics() {
  const [activeTopic, setActiveTopic] = useState(null);

  const handleClick = (topic) => {
    setActiveTopic(topic === activeTopic ? null : topic);
  };

  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {topics.map((topic, index) => (
          <Topic
            key={index}
            topic={topic}
            isActive={topic === activeTopic}
            onClick={handleClick}
          />
        ))}
      </nav>
    </div>
  );
}

export default function Header() {
  return (
    <div className="container">
      <header className="border-bottom lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <AnchorTag className="link-secondary" href="#">
              Subscribe
            </AnchorTag>
          </div>
          <div className="col-4 text-center">
            <AnchorTag
              className="blog-header-logo text-body-emphasis text-decoration-none"
              href="#"
            >
              roran-williams
            </AnchorTag>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <AnchorTag className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </AnchorTag>
            <AnchorTag className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </AnchorTag>
          </div>
        </div>
      </header>

      <Topics />
    </div>
  );
}
