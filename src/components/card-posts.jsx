import React from "react";
import Image from "./image";
import Blogs from "./blogs";
import AnchorTag from "./anchor-tag";

export default function CardPost() {
  const featuredBlogs = Blogs.filter((blog) => blog.type === "Featured");

  return (
    <div className="row mb-2">
      {featuredBlogs.map((blog, index) => (
        <div className="col-md-6" key={index}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                {blog.topic}
              </strong>
              <h3 className="mb-0">{blog.title}</h3>
              <div className="mb-1 text-body-secondary">{blog.date}</div>
              <p className="card-text mb-auto">{blog.content}</p>
              <AnchorTag
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
                <svg className="bi">
                  <use xlinkHref="#chevron-right" />
                </svg>
              </AnchorTag>
            </div>
            <div className="col-auto d-none d-lg-block">
              <Image
                id={index}
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={blog.image}
                alt={`Card Image ${index}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
