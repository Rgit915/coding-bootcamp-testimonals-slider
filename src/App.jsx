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
      <main className="flex flex-col justify-center items-center w-full min-h-screen">
        <section className="testimonals flex flex-col justify-center items-center min-h-screen w-full px-4 bg-[url(/images/pattern-curve.svg)] bg-no-repeat bg-left-bottom bg-[length:285px_72px]">
          <div className="image-container relative flex flex-col justify-center items-center w-[327px] h-[308px]  bg-[url(/images/pattern-bg.svg)] bg-cover bg-no-repeat">
            <img
             className="w-[254px] h-[253px]"
            src={currentSlide.image} alt="user image" />

            <div className="arrow-slider absolute w-[80px] h-[40px] p-2 top-[85%] left-[36%] bg-white rounded-3xl flex justify-center space-x-6">
            <button type="button" name="prev" onClick={handlePrev}>
                <img src={prevIcon} alt="previous slide arrow" />
              </button>
              <button type="button" name="next" onClick={handleNext}>
                <img src={nextIcon} alt="next slide arrow" />
              </button>
            </div>
          </div>

          <article className="testimonals_content text-center my-8 pt-4 h-[228px] w-[311px] bg-[url(/images/pattern-quotes.svg)] bg-no-repeat bg-top bg-[length:60px_50px] ">
            <p className="testimonals_text text-[18px] font-light leading-6">“{currentSlide.testimony}”</p>
            <div className="testimonials__info p-4 text-center text-[15px] leading-5 font-inter flex flex-col justify-center items-center space-x-2">
              <h1 className="testimonials__name font-bold text-dark-blue">{currentSlide.name}</h1>
              <h2 className="testimonials__profession font-medium text-grayish-blue">{currentSlide.profession}</h2>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default App;
