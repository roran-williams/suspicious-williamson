import React from "react";

export default function ArticleThree() {
  return (
    <article className="blog-post">
      <h2 className="display-5 link-body-emphasis mb-1">New feature</h2>
      <p className="blog-post-meta">
        December 14, 2020 by <a href="#">Chris</a>
      </p>

      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We&apos;ll repeat it often to keep
        the demonstration flowing, so be on the lookout for this exact same
        string of text.
      </p>
      <ul>
        <li>First list item</li>
        <li>Second list item with a longer description</li>
        <li>Third list item to close it out</li>
      </ul>
      <p>
        This is some additional paragraph placeholder content. It&apos;s a
        slightly shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
  );
}
