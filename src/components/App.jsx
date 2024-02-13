import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Svgs from "./svgs";
import FeaturePost, { FeaturePostImage } from "./feature-post";
import CardPost from "./card-posts";
import BloggerTitle from "./bloger-title";
import ArticleOne from "./article-one";
import ArticleTwo from "./article-two";
import ArticleThree from "./article-three";
import ArticleNavigation from "./article-navigation";
import About from "./about";
import RecentPost from "./recent-post";
import Archives from "./archives";
import SocialMedia from "./social-media";
import Footer from "./footer";

export default function App() {
  return (
    <div>
      <Svgs />
      <Header />
      <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
          <div className="row">
            <div className="col-lg-6 px-0">
              <FeaturePost />
            </div>
            <div className="col-lg-6 ">
              <FeaturePostImage source="https://source.unsplash.com/1600x900/?nature" />
            </div>
          </div>
        </div>
        <CardPost />

        <div className="row g-5">
          <div className="col-md-8">
            <BloggerTitle />
            <ArticleOne />
            <ArticleTwo />
            <ArticleThree />
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
