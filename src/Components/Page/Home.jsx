// src/components/Page.jsx
import  { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots"; // Ensure correct path
import Arrows from "./Arrows"; // Ensure correct path
import SlideImage from "./SlideImage"; // Ensure correct path
import "./Home.css";

const len = SlideImage.length - 1;

function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="sliderss-container">
      <SliderContent activeIndex={activeIndex} sliderImage={SlideImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={SlideImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Page;
