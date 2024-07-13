import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import logo from '../assets/logo.jpg';
function FooterCom() {
  return (
    <Footer bgLight>
      <div className="w-full bg-white to-amber-100 ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3 mx-auto justify-items-center">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="about">About</Footer.Link>
              <Footer.Link href="booking">Book Now</Footer.Link>
              <Footer.Link href="countries">Countries</Footer.Link>
              <Footer.Link href="courses">Courses</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://twitter.com/sheelanmisra">Twitter</Footer.Link>
              <Footer.Link href="https://wa.me/message/H6GTSW5G5WWTK1 ">whatsapp</Footer.Link>
              <Footer.Link href="https://www.facebook.com/profile.php?id=61560487778564">Facebook</Footer.Link>
              <Footer.Link href="contact">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/privacypolicy">Privacy Policy</Footer.Link>
              <Footer.Link href="/terms">Terms &amp; Conditions</Footer.Link>
              <Footer.Link href="/disclaimer">Disclaimer</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <div className=" px-4 py-6 justify-items-center mx-auto">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center pb-5">

            <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
            <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer"icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
            
          </div>
          <Footer.Copyright href="#" by="Unithink™" year={new Date().getFullYear()} />
          
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom