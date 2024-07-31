import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Page from './Components/Page/Page'
import Programs from './Components/Programs/Program'
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
        <Tittle subTitle='Our Program' title='What we Offer'/>
      <Programs/>
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
