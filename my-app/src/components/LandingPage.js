import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';



// Import images if they are in the src folder
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
    { name: 'Juakali', img: juakaliImg }
];

function LandingPage() {
    return (
        <div className="landing-page">
            <header className="header">
                <img src={logoImg} alt="LOGO" class="logo"/>
            </header>
            
                
            <section className="content">
                <h2>We connect people to bring projects to life</h2>
                <div className="icon-grid">
                    {professions.map((profession, index) => (
                        <div key={index} className="icon-item">
                            <img src={profession.img} alt={profession.name} />
                            <p>{profession.name}</p>
                        </div>
                    ))}
                </div>
                 <section className="rightsider">
                    <img src={tall} alt="tall" className="tallimage"/>
                </section>
                <div className="profilesection">
                    <div className="cta">
                        <p>
                            Are you looking for a skilled professional? Click here.
                            <br /><img src={certifiedImg} alt="Certified Icon" class="skillcerticon"/>
                        </p>
                    </div>
                    <div className="cta">
                        <p>
                             Are you with skill, talent or knowledgable and looking for a job click here. <br />
                            <img src={skillImg} alt="Skill Icon" class="skillcerticon"/>
                        </p>
                    </div>
                </div>
                <div className="job-container">
    <div className="job-item">
        <h3>Plumber Jobs</h3>
        <p>
            We have 100+ plumber jobs available. <br />
            <button className="job-btn">Search Jobs</button>
            <FontAwesomeIcon icon={faWrench} />
        </p>
    </div>
    <div className="job-item">
        <h3>Coble Jobs</h3>
        <p>
            We have 100+ coble jobs available. <br />
            <button className="job-btn">Search Jobs</button>
            <FontAwesomeIcon icon={faWrench} />
        </p>
    </div>
    <div className="job-item">
        <h3>Teaching Jobs</h3>
        <p>
            We have 100+ teaching jobs available. <br />
            <button className="job-btn">Search Jobs</button>
            <FontAwesomeIcon icon={faWrench} />
        </p>
    </div>
    <div className="job-item">
        <h3>Painter Jobs</h3>
        <p>
            We have 100+ painter jobs available. <br />
            <button className="job-btn">Search Jobs</button>
            <FontAwesomeIcon icon={faWrench} />
        </p>
    </div>
    <div className="job-item">
        <h3>Saller Jobs</h3>
        <p>
            We have 100+ saller jobs available. <br />
            <button className="job-btn">Search Jobs</button>
            <FontAwesomeIcon icon={faWrench} />
        </p>
    </div>
</div>

            </section>
            <div class="gallery-container">
                <div class="scrollable-images">
                    <img src={tabiya} alt="sponsor"/>
                    <img src={elimu} alt="sponsor"/>
                    <img src={swahili} alt="Skill Icon"/>
                    <img src={piw} alt="Skill Icon"/>
                    
                </div>
            </div>

        </div>
        
    );
}

export default LandingPage;
