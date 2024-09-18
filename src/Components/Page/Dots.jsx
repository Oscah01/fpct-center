// src/components/Dots.jsx
import PropTypes from "prop-types"; // Import PropTypes
function Dots({ activeIndex, onclick, sliderImage }) {
    return (
      <div className="all-dots">
        {sliderImage.map((slide, index) => (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        ))}
      </div>
    );
  }
  

// Define prop types
Dots.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onclick: PropTypes.func.isRequired,
  sliderImage: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      urls: PropTypes.string
    })
  ).isRequired
};

export default Dots;
