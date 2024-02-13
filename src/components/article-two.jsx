import React from "react";

export default function ArticleTwo() {
  return (
    <article className="blog-post">
      <h2 className="display-5 link-body-emphasis mb-1">Another blog post</h2>
      <p className="blog-post-meta">
        December 23, 2020 by <a href="#">Jacob</a>
      </p>

      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We&apos;ll repeat it often to keep
        the demonstration flowing, so be on the lookout for this exact same
        string of text.
      </p>
      <blockquote>
        <p>
          Longer quote goes here, maybe with some{" "}
          <strong>emphasized text</strong> in the middle of it.
        </p>
      </blockquote>
      <p>
        This is some additional paragraph placeholder content. It has been
        written to fill the available space and show how a longer snippet of
        text affects the surrounding content. We&apos;ll repeat it often to keep
        the demonstration flowing, so be on the lookout for this exact same
        string of text.
      </p>
      <h3>Example table</h3>
      <p>And don&apos;t forget about tables in these posts:</p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Upvotes</th>
            <th>Downvotes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>7</td>
            <td>9</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Totals</td>
            <td>21</td>
            <td>23</td>
          </tr>
        </tfoot>
      </table>

      <p>
        This is some additional paragraph placeholder content. It&apos;s a
        slightly shorter version of the other highly repetitive body text used
        throughout.
      </p>
    </article>
  );
}
