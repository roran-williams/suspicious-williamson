import React from "react";
import AnchorTag from "./anchor-tag";
import { articles } from "./blogs";

export default function Article() {
  return articles.map((Article) => (
    <article className="blog-post" key={Article.title}>
      <h2 className="display-5 link-body-emphasis mb-1">{Article.title}</h2>
      <p className="blog-post-meta">
        {Article.date}
        <AnchorTag href={Article.authorLink}>{Article.authorName}</AnchorTag>
        <div>{Article.content}</div>
      </p>
    </article>
  ));
}
