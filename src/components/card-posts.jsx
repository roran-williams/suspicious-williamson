import React from "react";
import PropTypes from "prop-types";
import Image from "./image";
import AnchorTag from "./anchor-tag";

function CardPost(props) {
  return (
    <div className="row mb-2">
      {props.Blogs.filter((card) => card.topic === props.activeTopic).map(
        (card) => (
          <div className="col-md-6" key={card.id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary-emphasis">
                  {props.activeTopic}
                </strong>
                <h3 className="mb-0">{card.title}</h3>
                <div className="mb-1 text-body-secondary">{card.date}</div>
                <p className="card-text mb-auto">{card.content}</p>
                <AnchorTag
                  href={card.link}
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg className="bi">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </AnchorTag>
              </div>
              {/* Use id as key for the corresponding image */}
              <div className="col-auto d-none d-lg-block">
                <Image
                  id={card.id}
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  src={card.image}
                  alt={`Card Image ${card.id}`}
                />
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

CardPost.propTypes = {
  Blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeTopic: PropTypes.string.isRequired,
};

export default CardPost;
