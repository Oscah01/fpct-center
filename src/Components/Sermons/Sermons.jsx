import React from "react";
import "./Sermons.css";

const Sermons = () => {
  return (
    <div className="sermons-container">
      {/* Header Section */}
      <header className="sermons-header">
        <h1>FPCT Mahubiri</h1>
        <p>Discover inspiring messages from our church leaders. Stay rooted in the Word of God.</p>
      </header>

      {/* Sermon Grid Section */}
      <section className="sermons-grid">
        <div className="sermon-card">
          <h3>Living in Grace</h3>
          <p>Preacher: Pastor Grace N.</p>
          <div className="sermon-buttons">
            <button className="watch-button">Watch Now</button>
            <button className="download-button">Download Notes</button>
          </div>
        </div>
        <div className="sermon-card">
          <h3>The Power of Prayer</h3>
          <p>Preacher: Bishop David O.</p>
          <div className="sermon-buttons">
            <button className="watch-button">Watch Now</button>
            <button className="download-button">Download Notes</button>
          </div>
        </div>
        <div className="sermon-card">
          <h3>Faith That Heals</h3>
          <p>Preacher: Rev. Samuel K.</p>
          <div className="sermon-buttons">
            <button className="watch-button">Watch Now</button>
            <button className="download-button">Download Notes</button>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="featured-sermon">
        <h2>Featured Sermon of the Month</h2>
        <div className="featured-sermon-content">
          <h3>Unshakable Faith</h3>
          <p>Preacher: Pastor Michael L.</p>
          <button className="watch-button">Watch Now</button>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
