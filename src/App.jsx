import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Page from './Components/Page/Page'
import Programs from './Components/Programs/Program'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testmonial/Testimonial'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Page/>
      <div className="container" >
        <Tittle subTitle='Message from Our National Leaders' title=''/>
        <Testimonial/>
        <Tittle subTitle='Our Program' title='What we Offer'/>
      <Programs/>
      <About/>
        <Tittle subTitle='Gallery' title='Center Photos'/>
         <Campus/>
        <Tittle subTitle='Contact us' title='Get in Touch'/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
