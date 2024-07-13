import React, { useState, useEffect } from 'react';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Footer } from 'flowbite-react';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import "../components/BookNow.css";
import '../pages/Booking.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountries, setFilteredCountries] = useState([]);
    const hardcodedCountries = [
        { c_id: 'f004', c_name: 'Germany' },
        { c_id: 'u006', c_name: 'United Kingdom' },
        { c_id: 'a001', c_name: 'Australia' },
        { c_id: 'f003', c_name: 'France' },
        { c_id: 'u007', c_name: 'United States of America' },
        { c_id: 'u005', c_name: 'United Arab Emirates' },
        { c_id: 'c002', c_name: 'Canada' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query === '') {
            setFilteredCountries([]);
        } else {
            const filtered = hardcodedCountries.filter(country =>
                country.c_name.toLowerCase().includes(query)
            );
            setFilteredCountries(filtered);
        }
    };

    const handleCountryClick = (countryName) => {
        setSearchQuery(countryName);
        setFilteredCountries([]);
        // You can navigate to the country detail page here if needed
    };

    return (
        <Navbar fluid rounded className="top-0 w-full z-10 shadow-md">
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-16 sm:h-14 md:h-16 lg:h-20" alt="Unithink" />
            </Navbar.Brand>
            <div className="flex items-center relative w-full max-w-xs mx-auto md:mx-0">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search countries..."
                    className="search-input"
                />
                {filteredCountries.length > 0 && searchQuery !== '' && (
                    <div className="search-results absolute top-full left-0 w-full bg-white shadow-lg z-10">
                        {filteredCountries.map(country => (
                            <Link key={country.c_id} to={`/countrydetail/${country.c_id}`}>
                                <div onClick={() => handleCountryClick(country.c_name)} className="recommended-text">
                                    {country.c_name}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex items-center space-x-2 md:order-2">
                <Link to='/booking'>
                    <Button gradientDuoTone='pinkToOrange' outline pill>Get Started</Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="md:w-auto w-full">
                <Navbar.Link>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/countries'>
                        Countries
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/courses'>
                        Courses
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/faqs'>
                        FAQs
                    </Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </Navbar.Link>
                <div className="social-icons_Header flex items-center">
                    <Footer.Icon href="https://www.linkedin.com/in/sheelan-misra/" target="_blank" rel="noopener noreferrer" icon={BsLinkedin} />
                    <Footer.Icon href="https://www.instagram.com/unithink.in?igsh=MWY3eXUybzBvazczaQ==" target="_blank" rel="noopener noreferrer" icon={BsInstagram} />
                    <Footer.Icon href="https://twitter.com/sheelanmisra" target="_blank" rel="noopener noreferrer" icon={BsTwitter} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
