import "./Biblestudy.css";

const Biblestudy = () => {
  return (
    <div className="bible-study-wrapper">
      {/* Hero Section */}
      <div className="bible-study-hero">
        <h1>Bible study & materials</h1>
        <p>Dive into our Bible study sessions and materials to grow spiritually and deepen your faith.</p>
      </div>

      {/* Main Content */}
      <div className="bible-study-content">
        {/* Bible Study Topics */}
        <section className="study-section">
          <h2>Bible Study Topics</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <h3>Weekly Sessions</h3>
              <p>Join us every week as we explore different books of the Bible.</p>
            </div>
            <div className="topic-card">
              <h3>Thematic Studies</h3>
              <p>Focus on topics like Faith, Leadership, and Marriage in our thematic sessions.</p>
            </div>
            <div className="topic-card">
              <h3>Special Workshops</h3>
              <p>Attend in-depth workshops led by renowned speakers.</p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="study-section">
          <h2>Study Materials</h2>
          <div className="resources-list">
            <div className="resource-item">
              <h3>PDF Study Guides</h3>
              <button>Download Now</button>
            </div>
            <div className="resource-item">
              <h3>Recorded Sessions</h3>
              <button>Watch Videos</button>
            </div>
            <div className="resource-item">
              <h3>Discussion Questions</h3>
              <button>View Questions</button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join a study group or attend an upcoming session.</p>
          <button>Join Now</button>
          <button>View Events</button>
        </section>
      </div>
    </div>
  );
};

export default Biblestudy;
