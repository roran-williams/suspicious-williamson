import React from "react";
import PropTypes from "prop-types";
import Image from "./image";

const posts = [
  {
    title: "Example blog post title 1",
    date: "January 15, 2023",
    image: "https://source.unsplash.com/1600x900/?lifestyle",
  },
  {
    title: "Example blog post title 2",
    date: "January 15, 2023",
    image: "https://source.unsplash.com/1600x900/?travel",
  },
  {
    title: "Example blog post title 3",
    date: "January 15, 2023",
    image: "https://source.unsplash.com/1600x900/?politics",
  },
];

function AnchorLink(props) {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

function Posts() {
  return (
    <ul className="list-unstyled">
      {posts.map((post, index) => (
        <li key={index}>
          <AnchorLink
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
          </AnchorLink>
        </li>
      ))}
    </ul>
  );
}

AnchorLink.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function RecentPost() {
  return (
    <div>
      <h4 className="fst-italic">Recent posts</h4>
      <Posts />
    </div>
  );
}
