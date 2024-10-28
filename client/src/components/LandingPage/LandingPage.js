import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faShop, faChalkboardUser, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

// Import images
import doctorImg from './images/doctor.png';
import masonImg from './images/mason.png';
import journalistImg from './images/journalist.png';
import carpenterImg from './images/carpenter.png';
import accountantImg from './images/accountant.png';
import farmerImg from './images/farmer.png';
import tailorImg from './images/tailor.png';
import programmerImg from './images/programmer.png';
import musicianImg from './images/musician.png';
import librarianImg from './images/librarian.png';
import juakaliImg from './images/juakali.png';
import skillImg from './images/skill.png';
import logoImg from './images/logo.png';
import certifiedImg from './images/certified.png';
import tall from './images/1.png';
import tabiya from './images/tabiya.svg';
import elimu from './images/elimu.png';
import swahili from './images/swahili.png';
import piw from './images/piw.png';
import technicianImg from './images/technician.png';

const professions = [
    { name: 'Doctor', img: doctorImg },
    { name: 'Mason', img: masonImg },
    { name: 'Journalist', img: journalistImg },
    { name: 'Carpenter', img: carpenterImg },
    { name: 'Accountant', img: accountantImg },
    { name: 'Farmer', img: farmerImg },
    { name: 'Tailor', img: tailorImg },
    { name: 'Programmer', img: programmerImg },
    { name: 'Musician', img: musicianImg },
    { name: 'Librarian', img: librarianImg },
    { name: 'Juakali', img: juakaliImg },
    { name: 'Technician', img: technicianImg },
];

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    { text: "This platform helped me land my dream job!", author: "John Doe, Developer" },
    { text: "Finding the right professional was quick and easy!", author: "Jane Smith, HR Manager" },
    { text: "A fantastic platform for job seekers and employers!", author: "Mike Ross, Freelancer" }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <div className="testimonials-container">
      <h3 className="testimonial-text">"{testimonials[currentTestimonial].text}"</h3>
      <p className="testimonial-author">- {testimonials[currentTestimonial].author}</p>
    </div>
  );
};


function LandingPage() {
    return (
        <div className="landing-page">
            <header className="header">
                <img src={logoImg} alt="LOGO" className="logo" />
            </header>

            <div style={{
                margin: '20px 0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <input
                    type="text"
                    placeholder="Search for professionals..."
                    style={{
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        width: '300px',
                        fontSize: '16px',
                        transition: 'border 0.3s'
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#007bff';
                        e.target.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '';
                        e.target.style.outline = '';
                    }}
                />
                <button
                    style={{
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer',
                        marginLeft: '10px',
                        transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
                >
                    Search
                </button>
            </div>

            <section className="content">
                <div className="icon-grid">
                    {professions.map((profession, index) => (
                        <div key={index} className="icon-item">
                            <img src={profession.img} alt={profession.name} />
                            <p>{profession.name}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials Component */}
                <Testimonials /> 

                <section className="rightsider">
                    <img src={tall} alt="tall" className="tallimage" />
                </section>
                <div className="profilesection">
                    <div className="cta">
                        <p>
                            Are you looking for a skilled professional? Click here.
                            <br /><img src={certifiedImg} alt="Certified Icon" className="skillcerticon" />
                        </p>
                    </div>
                    <div className="cta">
                        <p>
                            Are you with skill, talent or knowledge and looking for a job? Click here.
                            <br /><img src={skillImg} alt="Skill Icon" className="skillcerticon" />
                        </p>
                    </div>
                </div>
                <div className="job-container">
                                        <div className="job-item">
                        <h3>Plumber Jobs</h3>
                        <p>
                            We have 100+ plumber jobs available. <br />
                            <button className="job-btn">Search Jobs</button> <br />
                            <FontAwesomeIcon icon={faWrench} />
                        </p>
                    </div>
                    <div className="job-item">
                        <h3>Hairdresser</h3>
                        <p>
                            We have 100+ cobbler jobs available. <br />
                            <button className="job-btn">Search Jobs</button> <br />
                            <FontAwesomeIcon icon={faWrench} />
                        </p>
                    </div>
                    <div className="job-item">
                        <h3>Teaching Jobs</h3>
                        <p>
                            We have 100+ teaching jobs available. <br />
                            <button className="job-btn">Search Jobs</button> <br />
                            <FontAwesomeIcon icon={faChalkboardUser} />
                        </p>
                    </div>
                    <div className="job-item">
                        <h3>Cobbler Jobs</h3>
                        <p>
                            We have cobbler jobs available. <br />
                            <button className="job-btn">Search Jobs</button> <br />
                            <FontAwesomeIcon icon={faShoePrints} />
                        </p>
                    </div>
                    <div className="job-item">
                        <h3>Seller Jobs</h3>
                        <p>
                            We have 100+ seller jobs available. <br />
                            <button className="job-btn">Search Jobs</button> <br />
                            <FontAwesomeIcon icon={faShop} />
                        </p>
                    </div>
                </div>
            </section>

            <div className="gallery-container">
                <div className="scrollable-images">
                    <img src={tabiya} alt="sponsor" />
                    <img src={elimu} alt="sponsor" />
                    <img src={swahili} alt="Skill Icon" />
                    <img src={piw} alt="Skill Icon" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
