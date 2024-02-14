import React from "react";
import { about } from "./blogs";

export default function About() {
  const { title, content } = about;
  return (
    <div className="p-4 mb-3 bg-body-tertiary rounded">
      <h4 className="fst-italic">{title}</h4>
      <p className="mb-0">{content}</p>
    </div>
  );
}
