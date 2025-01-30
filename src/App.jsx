import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NewsCentre from './Components/NewsCentre/NewsCentre'
import Page from './Components/Page/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Management from './Components/Management/Management';
import Gallery from './Components/Gallery/Gallery';
import Spirituals from './Components/Spirituals/Spirituals';
import Accomodation from './Components/Workshops/Accomodation';
import Conferences from './Components/Conferences/MeetingAndEvents';
import Biblestudy from './Components/Biblestudy/Biblestudy';
import Sermons from './Components/Sermons/Sermons';
import Parking from './Components/Parking/Parking';
import "preline/preline";
import Slided from './Components/About/Slided';
import Visit from './Components/NewsCentre/Visit';
import Welcome from './Components/Page/Welcome';
import Staff from './Components/staff/Staff';
// Importing slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GivingPage from './Components/giving/GivingPage';



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
       
         
        <Routes>
          <Route path="/" element={
            <div className="container">
               <Page />
               <Welcome/>
              <NewsCentre/>

             <Slided subTitle="News Centre" title="V" />
             <Visit/>

            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/management" element={<Management />} />
          <Route path="/spirituals" element={<Spirituals/>} />
          <Route path="/staff" element={<Staff/> } />
          <Route path="/accomodation" element={<Accomodation/> } />
          <Route path="/conferences" element={<Conferences/>} />
          <Route path="/biblestudy" element={<Biblestudy/>} />
          <Route path="/sermons" element={<Sermons/>} />
          <Route path="/parking" element={<Parking/>} />
          <Route path="/newsCentre" element={<NewsCentre/>} />
          <Route path="/give" element={<GivingPage/>} />
          
        </Routes>
        <Footer />
        </div>
    </Router>
  );
};

export default App;
