import '../NewsCentre/Visit.css'

function Visit() {
  return (
    <div>
        <div className="container-before-footer-visit">
        <div className="bofore-footer">
          <h1>Planning to Visit Us ?</h1>
          <p>We would be delighted to have you join our vibrant community and experience all <br></br>
            that we have to offer. Feel free to book your visit with us!</p>
        </div>
        <div className="right-before-footer">
          <button>Reserve Spot</button>
        </div>
      </div>
          <div className="container-before-footer">
        <div className="bofore-footer">
          <h1>Looking for Spiritual Guidance? We Can Help.</h1>
          <p>Our dedicated team is here to offer prayers, support, and encouragement.<br/> 
          Whether you're facing challenges or seeking peace, we're just a message away.<br/> 
          Reach out to us, and let's walk this spiritual journey together.</p>
        </div>
        <div className="right-before-footer">
          <button>Request Prayer</button>
        </div>
      </div>
    </div>
  )
}

export default Visit
