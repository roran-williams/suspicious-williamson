import React from "react";
import Image from "./image";
import AnchorTag from "./anchor-tag";
import Blogs from "./blogs";

export default function FeaturePost() {
  return (
    <div>
      {Blogs.filter((post) => post.type === "Top-Featured").map((post) => (
        <div key={post.title}>
          <h1 className="display-4 fst-italic">{post.title}</h1>
          <p className="lead my-3">{post.content}</p>
          <p className="lead mb-0">
            <AnchorTag href="#" className="text-body-emphasis fw-bold">
              Continue reading...
            </AnchorTag>
          </p>
        </div>
      ))}
    </div>
  );
}

export function FeaturePostImage() {
  return (
    <div>
      {Blogs.filter((post) => post.type === "Top-Featured").map((post) => (
        <Image
          key={post.title}
          className="rounded img-fluid"
          src={post.image}
          alt={post.title}
        />
      ))}
    </div>
  );
}
