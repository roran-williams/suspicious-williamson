import React from "react";
import Image from "./image";
import AnchorTag from "./anchor-tag";
import { FeaturedPosts } from "./blogs";

export default function FeaturePost() {
  return (
    <div>
      <h1 className="display-4 fst-italic">{FeaturedPosts.Title}</h1>
      <p className="lead my-3">{FeaturedPosts.content}</p>
      <p className="lead mb-0">
        <AnchorTag href="#" className="text-body-emphasis fw-bold">
          Continue reading...
        </AnchorTag>
      </p>
    </div>
  );
}

export function FeaturePostImage() {
  return <Image className="rounded img-fluid" src={FeaturedPosts.image} />;
}
