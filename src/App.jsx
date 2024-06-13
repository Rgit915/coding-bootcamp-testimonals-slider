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
        <section className="testimonals flex flex-col justify-center items-center w-full min-h-screen  bg-[url(/images/pattern-curve.svg)] bg-no-repeat bg-left-bottom bg-[length:285px_72px] md:flex-row-reverse md:bg-[length:400px_100px] xl:bg-[length:610px_150px] ">
          <div className="image-container relative flex flex-col justify-center items-center w-[327px] h-[308px]  bg-[url(/images/pattern-bg.svg)] bg-cover bg-no-repeat md:absolute md:right-[10%] md:p-8 md:w-[360px] md:h-[360px] xl:w-[600px] xl:h-[650px]">
            <img
             className="w-[254px] h-[253px] md:w-[300px] md:h-[300px] xl:w-[540px] xl:h-[540px] "
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

          <article className="testimonals_content text-center my-8 pt-4 h-[228px] w-[311px] bg-[url(/images/pattern-quotes.svg)] bg-no-repeat bg-top bg-[length:60px_50px] md:absolute  md:left-[5%] md:top-[25%] md:w-[350px] lg:left-[10%] lg:w-[635px] md:text-left ">
            <p className="testimonals_text text-[18px] font-light leading-6 lg:text-[24px] lg:leading-[30px] xl:text-[32px] xl:leading-[44px]">“{currentSlide.testimony}”</p>
            <div className="testimonials__info p-4 text-center text-[15px] leading-5 font-inter flex flex-col justify-center items-center space-x-2 md:flex-row md:justify-start lg:text-[20px] md:leading-[38px]">
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
