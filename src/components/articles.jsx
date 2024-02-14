import React from "react";
import AnchorTag from "./anchor-tag";
import Blogs from "./blogs";

export default function Article() {
  return (
    <div>
      {Blogs.filter(
        (article) => article.type === "Article" && article.id > 6,
      ).map((article) => (
        <article className="blog-post" key={article.title}>
          <h2 className="display-5 link-body-emphasis mb-1">{article.title}</h2>
          <p className="blog-post-meta">
            {article.date}
            <AnchorTag href={article.authorLink}>
              {article.authorName}
            </AnchorTag>
            <div>{article.content}</div>
          </p>
        </article>
      ))}
    </div>
  );
}
