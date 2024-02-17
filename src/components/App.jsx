import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Svgs from "./svgs";
import FeaturePost, { FeaturePostImage } from "./feature-post";
import CardPost from "./card-posts";
import BloggerTitle from "./bloger-title";
import Article from "./article-one";
import ArticleNavigation from "./article-navigation";
import About from "./about";
import RecentPost from "./recent-post";
import Archives from "./archives";
import SocialMedia from "./social-media";
import Footer from "./footer";
import cardBlogs from "./blogs";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [activeTopic, setActiveTopic] = useState("World");

  // useEffect with side effect (example)
  useEffect(() => {
    console.log("activeTopic changed:", activeTopic);
    // Perform any other side effects or operations here if needed
  }, [activeTopic]);

  function handleClick(topic) {
    setActiveTopic(topic);
    setIsActive(!isActive);
    console.log(isActive);
    console.log(topic);
  }

  return (
    <div>
      <Svgs />
      <Header
        onClick={handleClick}
        isActive={isActive}
        activeTopic={activeTopic}
      />
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <div className="row">
            <div className="col-lg-6 px-0">
              <FeaturePost />
            </div>
            <div className="col-lg-6 ">
              <FeaturePostImage />
            </div>
          </div>
        </div>
        <CardPost Blogs={cardBlogs} activeTopic={activeTopic} />

        <div className="row g-5">
          <div className="col-md-8">
            <BloggerTitle />
            <Article />
            <ArticleNavigation />
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <About />
              <RecentPost />
              <Archives />
              <SocialMedia />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
