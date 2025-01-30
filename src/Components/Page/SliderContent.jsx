import PropTypes from "prop-types"; // Import PropTypes

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slideds active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="overlay"></div>
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text" dangerouslySetInnerHTML={{ __html: slide.description }}></h3>
        </div>
      ))}
    </section>
  );
}

// Define prop types
SliderContent.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  sliderImage: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      urls: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SliderContent;
