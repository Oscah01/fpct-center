import Navbar from './Components/Navbar/Navbar'
import Page from './Components/Page/Page'
import NewsCentre from './Components/NewsCentre/NewsCentre'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testmonial/Testimonial'
import Contacts from './Components/Contacts/Contacts'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Page/>
      <div className="container" >
      <Tittle subTitle='News Centre' title='Our Recent News'/>
      <NewsCentre/>
      <About/>
        <Tittle subTitle='Gellery' title='Center Photos'/>
         <Campus/>
        <Tittle subTitle='LEADERSHIP TEAM & ADMINISTRATIONS' title='What Pentecostians say'/>
        <Testimonial/>
        <Tittle subTitle='Contact us' title='Get in Touch'/>
        <Contacts/>
      </div>
    </div>
  )
}

export default App
