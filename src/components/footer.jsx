import React from "react";
import AnchorTag from "./anchor-tag";

export default function Footer() {
  return (
    <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
      <p>
        github:
        <AnchorTag href="https://github.com/roran-williams" className="m-3">
          roran-williams
        </AnchorTag>
        twitter:
        <AnchorTag href="https://twitter.com/mdo" className="m-3">
          @roran__williams
        </AnchorTag>
        . copyright © {new Date().getFullYear()}
      </p>
      <p className="mb-0">
        <AnchorTag href="#">Back to top</AnchorTag>
      </p>
    </footer>
  );
}
