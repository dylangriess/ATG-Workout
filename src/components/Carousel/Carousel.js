import React from "react";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel5 from "../../assets/images/carousel5.jpg";

function Carousel() {
  return (
    <div>
      <section aria-label="image carousel">
        <div className="carousel" data-carousel>
          <button className="carousel-button prev" data-carousel-button="prev">
            &#8678;
          </button>
          <button className="carousel-button next" data-carousel-button="next">
            &#8680;
          </button>
          <ul data-slides>
            <li className="slide" key="carousel1" data-active>
              <img src={carousel1} alt="carousel item #1"></img>
            </li>
            <li className="slide" key="carousel2">
              <img src={carousel2} alt="carousel item #2"></img>
            </li>
            <li className="slide" key="carousel3">
              <img src={carousel3} alt="carousel item #3"></img>
            </li>
            <li className="slide" key="carousel4">
              <img src={carousel4} alt="carousel item #4"></img>
            </li>
            <li className="slide" key="carousel5">
              <img src={carousel5} alt="carousel item #5"></img>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
