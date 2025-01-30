import './Visit.css';


function Visit() {
  return (
    <div className='visit'>
      <div className="plan-to-visit">
        <div className='plan-to-visit-para'>
          <h1>Planning to Visit Us ?</h1>
          <p>We would be delighted to have you join our vibrant community and experience all <br></br>
            that we have to offer. Feel free to book your visit with us!</p>
            </div>
            <div className='plan-to-visit-btn'>
              <button >Reserve a spot</button>
            </div>
        </div>
      <div className="plan-to-visit">
        <div className='plan-to-visit-para'>
        <h1>Looking for Spiritual Guidance? We Can Help.</h1>
          <p>Our dedicated team is here to offer prayers, support, and encouragement.<br/> 
          Whether you&apos;re facing challenges or seeking peace, wer&apos;e just a message away.<br/> 
          Reach out to us, and let&apos;s walk this spiritual journey together.</p>
            </div>
            <div className='plan-to-visit-btn'>
              <button >Request Prayer</button>
            </div>
        </div>
    </div>
  )
}

export default Visit
