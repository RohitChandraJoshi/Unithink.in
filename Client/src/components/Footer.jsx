import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import logo from "../assets/logo.jpg";
function FooterCom() {
  return (
    <Footer bgLight>
      <div className="w-full bg-white to-amber-100 ">
        <div className="grid w-full grid-cols-3 gap-8 px-6 py-8 md:grid-cols-6 mx-auto justify-items-center">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="about">About</Footer.Link>
              <Footer.Link href="booking">Book Now</Footer.Link>
              <Footer.Link href="countries">Countries</Footer.Link>
              <Footer.Link href="courses">Courses</Footer.Link>
              <Footer.Link href="skilling">Skilling Academy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Countries" />
            <Footer.LinkGroup col>
              {[
                { name: "USA", c_id: "u007" },
                { name: "Canada", c_id: "c002" },
                { name: "United Kingdom", c_id: "u006" },
                { name: "Ireland", c_id: "u011" }, 
                { name: "Australia", c_id: "a001" },
                { name: "Russia", c_id: "u008" },
                { name: "Europe", c_id: "" }, 
                { name: "Asia", c_id: "" },
                { name: "Dubai", c_id: "u005" },
                { name: "Sweden", c_id: "f001" }, 
                { name: "Germany", c_id: "f004" },
                { name: "Belgium", c_id: "f005" }, 
                { name: "Italy", c_id: "f006" }, 
                { name: "India", c_id: "u010" },
                { name: "Luxembourg", c_id: "f007" }, 
              ].map((country) => (
                <Footer.Link
                  key={country.c_id}
                  href={`/countrydetail/${country.c_id}`}
                >
                  {country.name}
                </Footer.Link>
              ))}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Courses" />
            <Footer.LinkGroup col>
              {[
                {
                  courseId: "course010",
                  courseName: "Medicine",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Fmedicine_icon.png?alt=media&token=0f71bbf4-0b2d-44c3-a247-e061e822defd",
                  description:
                    "Study the science and practice of diagnosing, treating, and preventing diseases.",
                },
                {
                  courseId: "course001",
                  courseName: "Business Administration",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FBusinessAdministraion_icon.png?alt=media&token=6fa08a0d-b544-497e-88f8-485ad646dd8e",
                  description:
                    "Learn the fundamentals of business management and administration.",
                },
                {
                  courseId: "course002",
                  courseName: "Data Science/Analytics and Machine Learning",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FDataScience_icons.png?alt=media&token=2a26e69e-25a5-4c47-a730-006d282f25b8",
                  description:
                    "Explore data analysis, statistics, and machine learning techniques.",
                },
                {
                  courseId: "course003",
                  courseName: "Computer Science/IT",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2FComputerScience_icon.png?alt=media&token=e5318a83-e1fc-4614-af2e-d917043841fb",
                  description:
                    "Study the principles of computing, programming, and information technology.",
                },
                {
                  courseId: "course004",
                  courseName: "Engineering",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Fengineering_icon.png?alt=media&token=5749c405-15cd-47d0-a900-a62355555af2",
                  description:
                    "Understand the fundamentals of various engineering disciplines.",
                },
                {
                  courseId: "course005",
                  courseName: "Economics",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Feconomics_icon.png?alt=media&token=b16035ea-43f7-4e92-b0b8-bef23ce4593c",
                  description:
                    "Learn about economic theories, models, and their applications.",
                },
                {
                  courseId: "course006",
                  courseName: "Public Health",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Fpublichealth_icon.png?alt=media&token=9e3d6099-6ea6-4161-8fa1-393c732e74dc",
                  description:
                    "Explore the science and practice of protecting and improving community health.",
                },
                {
                  courseId: "course007",
                  courseName: "Psychology",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Fpsychology_icon.png?alt=media&token=de504d83-ea7b-4a23-99f9-860c878d5b16",
                  description: "Study human behavior and mental processes.",
                },
                {
                  courseId: "course008",
                  courseName: "Finance",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Ffinance_icon.png?alt=media&token=283c174e-4890-4a22-8a32-501e7c8a990c",
                  description:
                    "Understand financial management, investment, and markets.",
                },
                {
                  courseId: "course009",
                  courseName: "Law",
                  imageLink:
                    "https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/UniThink%20courses%20images%2Flaw_icon.png?alt=media&token=02d987b7-25b6-4e8d-9adb-14b129a83dc7",
                  description:
                    "Learn about legal principles, systems, and practices.",
                },
              ].map((course) => (
                <Footer.Link
                  key={course.courseId}
                  href={`/coursedetail/${course.courseId}`}
                >
                  {course.courseName}
                </Footer.Link>
              ))}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Language Training" />
            <Footer.LinkGroup col>
              {[
                { languageId: 1, name: "IELTS" },
                { languageId: 2, name: "TOEFL" },
                { languageId: 3, name: "PTE" },
                { languageId: 4, name: "Duolingo Test" },
                { languageId: 5, name: "Level A1 German Language" },
                { languageId: 6, name: "Japanese Language" },
                { languageId: 7, name: "OET" },
              ].map((language) => (
                <Footer.Link
                  key={language.languageId}
                  href={`/languagetrainingdetail/${language.languageId}`}
                >
                  {language.name}
                </Footer.Link>
              ))}
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://twitter.com/sheelanmisra">
                Twitter
              </Footer.Link>
              <Footer.Link href="https://wa.me/message/GIWSQYCHN67RD1  ">
                whatsapp
              </Footer.Link>
              <Footer.Link href="https://www.facebook.com/profile.php?id=61560487778564">
                Facebook
              </Footer.Link>
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
            <Footer.Icon
              href="https://www.linkedin.com/company/unithink-education-international/"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ=="
              target="_blank"
              rel="noopener noreferrer"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/sheelanmisra"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsTwitter}
            />
            {/* <Footer.Icon href="#" icon={BsGithub} /> */}
          </div>
          <Footer.Copyright
            href="#"
            by="Unithink™"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
