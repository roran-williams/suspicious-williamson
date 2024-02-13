import React from "react";

export default function CardPost() {
  const cards = [{ name: "Card One" }, { name: "Card Two" }];
  const images = [
    {
      className: "bd-placeholder-img",
      width: "200",
      height: "250",
      src: "https://source.unsplash.com/200x250/?health",
    },
    {
      className: "bd-placeholder-img",
      width: "200",
      height: "250",
      src: "https://source.unsplash.com/200x250/?food",
    },
  ];

  return (
    <div className="row mb-2">
      {cards.map((card, index) => (
        <div className="col-md-6" key={index}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                World {card.name}
              </strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
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
            <div className="col-auto d-none d-lg-block">
              <img
                className={images[index].className}
                width={images[index].width}
                height={images[index].height}
                src={images[index].src}
                alt={`Card Image ${index}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
