import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Countries from './pages/Countries'
import FAQs from './pages/FAQs'
import Community from './pages/Community'
import Booking from './pages/Booking'
import Terms from './pages/Terms'
import Courses from './pages/Courses'
import CountryDetails from './pages/CountryDetails'
import Counselling from './pages/Counselling'
import Business from './pages/Business'
import Skilling from './pages/Skilling'
import University from './pages/University'
import PrivacyPolicy from './pages/policy'
import Disclaimer from './pages/Disclaimer'
import CourseDetails from './pages/CourseDetails'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/counselling' element = {<Counselling/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/skilling' element={<Skilling/>}/>
        <Route path='/university' element={<University/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/countrydetail/:countryid' element={<CountryDetails />} />
        <Route path='/coursedetail/:courseId' element={<CourseDetails />} />
       
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App