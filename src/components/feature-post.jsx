import React from "react";
import PropTypes from "prop-types";

export default function FeaturePost() {
  return (
    <div>
      <h1 className="display-4 fst-italic">
        Title of a longer featured blog post
      </h1>
      <p className="lead my-3">
        Multiple lines of text that form the lede, informing new readers quickly
        and efficiently about what’s most interesting in this post’s contents.
      </p>
      <p className="lead mb-0">
        <a href="#" className="text-body-emphasis fw-bold">
          Continue reading...
        </a>
      </p>
    </div>
  );
}

export function FeaturePostImage(props) {
  return <img className="rounded img-fluid" src={props.source} />;
}

FeaturePostImage.propTypes = {
  // Ensure source is a required string
  source: PropTypes.string.isRequired,
};
