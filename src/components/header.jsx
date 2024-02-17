import React from "react";
import AnchorTag from "./anchor-tag";
import Topics from "./topics";
import PropTypes from "prop-types";

export default function Header(props) {
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

      <Topics
        onClick={props.onClick}
        isActive={props.isActive}
        activeTopic={props.activeTopic}
      />
    </div>
  );
}

Header.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  activeTopic: PropTypes.string.isRequired,
};
