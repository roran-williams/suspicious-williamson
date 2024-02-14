import React from "react";
import Image from "./image";
import AnchorTag from "./anchor-tag";
import Blogs from "./blogs";

export default function Posts() {
  return (
    <ul className="list-unstyled">
      {Blogs.filter(
        (post) => post.type === "Article" && post.id >= 3 && post.id <= 6,
      ).map((post, index) => (
        <li key={index}>
          <AnchorTag
            className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
            href="#"
          >
            <Image
              className="bd-placeholder-img"
              width="100%"
              height="96"
              src={post.image}
              alt={`Nature Image ${index}`}
            />
            <div className="col-lg-8">
              <h6 className="mb-0">{post.title}</h6>
              <small className="text-body-secondary">{post.date}</small>
            </div>
          </AnchorTag>
        </li>
      ))}
    </ul>
  );
}
