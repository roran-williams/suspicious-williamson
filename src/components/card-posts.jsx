import React from "react";
import Image from "./image";
import cardBlogs from "./blogs";

export default function CardPost() {
  return (
    <div className="row mb-2">
      {cardBlogs.map((card, index) => (
        <div className="col-md-6" key={index}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                {card.topic}
              </strong>
              <h3 className="mb-0">{card.title}</h3>
              <div className="mb-1 text-body-secondary">{card.date}</div>
              <p className="card-text mb-auto">{card.content}</p>
              <a
                href="#"
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
                <svg className="bi">
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </div>
            {/* Use index to get the corresponding image for each card */}
            <div className="col-auto d-none d-lg-block">
              <Image
                id={index}
                className="bd-placeholder-img"
                width="200"
                height="250"
                src={card.image}
                alt={`Card Image ${index}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
