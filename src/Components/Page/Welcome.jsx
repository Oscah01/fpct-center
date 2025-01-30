import "./Welcome.css";
import center1 from "../../assets/center1.JPG";
import center2 from "../../assets/center12.JPG";
import center3 from "../../assets/center3.JPG";

const Welcome = () => {
  const cards = [
    {
      image: center1,
      title: '"She Is Free" Women\'s Conference',
      description:
        "We are hosting a Women's Conference on January 31 at our Lafayette Campus!",
    },
    {
      image: center2,
      title: "California Wildfires Support",
      description:
        "Support efforts for those affected by the California wildfires.",
    },
    {
      image: center3,
      title: "Summer Camp 2025",
      description: "Join us for an exciting summer camp experience in 2025.",
    },
  ];

  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <h1>Welcome to FPCT CENTER</h1>
        <p>
          We're a center offering quality spiritual and social services based on
          biblical principles. Our mission is to bring hope to individuals and
          communities, helping them strengthen their relationship with God and
          each other.
        </p>
        <a href="#give">Give to FPCT Center</a>
      </div>

      <div className="welcome-right">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="info-content">
              <h3 className="card-title">{card.title}</h3>
              <p>{card.description}</p>
            </div>


          </div>
        ))}
      </div>

      {/* Polygon Shape Below */}
      <div className="polygon-shape"></div>
    </div>
  );
};

export default Welcome;
