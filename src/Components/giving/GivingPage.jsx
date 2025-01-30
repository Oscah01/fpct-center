import "./GivingPage.css";
import paypalImage from '../../assets/paypal-center.avif';

const GivingPage = () => {
  return (
    <div className="giving-page">
      {/* Header Section */}
      <header className="giving-header">
        <h1>Give</h1>
      </header>

      <section className="giving-options">
        <p>
          Giving is a biblical principle that when lived by, 
          produces a <br /> blessed harvest in our lives.
        </p>
      </section>

      {/* Donation Form Section */}
      <section className="thank-support">
        <div className="thank-support-h1">
          <h1>Support <br /> FPCT CENTER</h1>
        </div>
        <div className="thank-support-para">
          <p>
            Thank you for your support. 
            Choose a fund to give towards and enter an amount for your gift. 
            Your giving is making a difference in our Center, our community, and the world. 
          </p>
          <br />
          <p>
            If you experience technical difficulties with electronic giving,
            please call or text the office at +255 622 562 572. Thank you!
          </p>
        </div>
      </section>

      {/* Four Sections */}
      <div className="give">
        <h1>Ways to give</h1>
        <div className="container">
          <div className="section section-1">
            <img 
              src={paypalImage} 
              alt="PayPal Option" 
              className="paypal-image" 
            />
          </div>
          <div className="section section-2">
           <h1>Online with Paypal</h1>
           <p>Click "Send" to log into your PayPal Profile</p>
           <button className="give-with-paypal-btn">Give with PayPal</button>
          </div>
         
          <div className="section section-4">
           <h1>Online with Nala</h1>
           <p>Click "Send" to log into your PayPal Profile</p>
           <button className="give-with-paypal-btn">Give with PayPal</button>
          </div>
          <div className="section section-3">
            <img 
              src={paypalImage} 
              alt="PayPal Option" 
              className="paypal-image" 
            />
          </div>
            </div>
            <div className="mobile-bank-transfer">
            <div className="bank-transfer">

            <h1>Bank Transfer</h1>
            <ul className="bank-payements">
                        <div className="crdb-nmb">
                        <li className="crdb">CRDB</li>
                        <p className="mpesa-no">Acc No: 646434</p>
                        <p>Name: Fpct Center </p>
                        <li className="nmb">NMB</li>
                        <p className="mpesa-no">Acc No: 544564</p>
                        <p>Name: Fpct Center</p>
                        </div>
                        <div className="stanbic-nbc">
                        <li className="stanbic">STANBIC</li>
                        <p className="mpesa-no">Acc No: 544564</p>
                         <p>Name: Fpct Center</p>
                        <li className="nbc">NBC</li>
                        <p className="mpesa-no">Acc No: 544564</p>
                         <p>Name: Fpct Center</p>
                        </div>
                      </ul>
            </div>
                <div className="mobile-transfer">
                    <h1> Mobile Transfer</h1>
                      <ul className="mobile-payements">
                        <div className="mpesa-airtel">
                        <li className="mpesa"> M-pesa</li>
                        <p className="mpesa-no">Pay No: 646434</p>
                        <p>Name: Fpct Center </p>
                        <li className="airtel-money">Airtel Money</li>
                        <p className="mpesa-no">Pay No: 544564</p>
                        <p>Name: Fpct Center</p>
                        </div>
                        <div className="tigo-halo">
                        <li className="tigo-pesa"> Tigo Pesa</li>
                        <p className="mpesa-no">Pay No: 544564</p>
                         <p>Name: Fpct Center</p>
                        <li className="halopesa">Halopesa</li>
                        <p className="mpesa-no">Pay No: 544564</p>
                         <p>Name: Fpct Center</p>
                        </div>
                      </ul>
                    </div>
               
                <div className="in-person">
                    <h1>
                    In Person
                    </h1>
                    <p>Offerings can be given during Worship Services, 
                      Bible Study, and Special Services.</p>
                      <br />
                      <br />
                      <p>Offerings can be deposited directly into the mailbox 
                        locations as well.</p>
                        <br />
                        <br />
                        <p>Either at the Main Campus or the North Campus Locations.</p>
                </div>
        </div>

        </div>
    </div>
  );
};

export default GivingPage;
