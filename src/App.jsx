import { useState } from "react";
import data from "../data.json";

import prevIcon from "/images/icon-prev.svg";
import nextIcon from "/images/icon-next.svg";

const App = () => {
  const testimonialsData = data.testimonials;

  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
      setSlideIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
      );

  };

  const currentSlide = testimonialsData[slideIndex];

  return (
    <>
      <main>
        <section className="testimonals">
          <div className="image-container">
            <img src={currentSlide.image} alt="user image" />

            <div className="arrow-slider">
            <button type="button" name="prev" onClick={handlePrev}>
                <img src={prevIcon} alt="previous slide arrow" />
              </button>
              <button type="button" name="next" onClick={handleNext}>
                <img src={nextIcon} alt="next slide arrow" />
              </button>
            </div>
          </div>

          <article className="testimonals_content">
            <p>“{currentSlide.testimony}”</p>
            <div>
              <h1>{currentSlide.name}</h1>
              <h2>{currentSlide.profession}</h2>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default App;
