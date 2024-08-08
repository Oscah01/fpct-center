import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NewsCentre from './Components/NewsCentre/NewsCentre'
import Page from './Components/Page/Home';
import Tittle from './Components/Tittle/Tittle';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Management from './Components/Management/Management';
import Gallery from './Components/Gallery/Gallery';
import Spirituals from './Components/Spirituals/Spirituals';
import Serminars from './Components/Seminars/Serminars';
import Workshops from './Components/Workshops/Workshops';
import Conferences from './Components/Conferences/Conferences';
import Biblestudy from './Components/Biblestudy/Biblestudy';
import Sermons from './Components/Sermons/Sermons';
import Parking from './Components/Parking/Parking';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="container">
              <Page />
              <Tittle subTitle='News Centre' title='Our Recent News'/>
              <NewsCentre/>
              {/* <Tittle subTitle='Contact us' title='Get in Touch' />
              <Contacts /> */}
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/management" element={<Management />} />
          <Route path="/spirituals" element={<Spirituals/>} />
          <Route path="/seminars" element={<Serminars/>} />
          <Route path="/workshops" element={<Workshops/>} />
          <Route path="/conferences" element={<Conferences/>} />
          <Route path="/biblestudy" element={<Biblestudy/>} />
          <Route path="/sermons" element={<Sermons/>} />
          <Route path="/parking" element={<Parking/>} />

        </Routes>
        <Footer />
        </div>
    </Router>
  );
};

export default App;
