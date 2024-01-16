import React from 'react'
import './More.css'
// import Card1 from '../Images/DOC 2.jpg'
// import Card2 from '../Images/JOB IMG.jpg'
// import Card3 from '../Images/IT IMG.jpg'
// import Card4 from '../Images/MARKETING.jpg'

function More() {
  return (
    <>
    <div className='title' id='service'>
        <h1>Services</h1>
        
    </div>
<div className="card-container">
    <div className="card">
        <img src="https://i.postimg.cc/7LzBh4CR/DOC-2.jpg" alt="" />
        <div className="card-content">
            <h3>PLACEMENT FOR DOCTORS</h3>
            <br />
            <h4>Our team comprises experts with an in-depth understanding of the medical field. We specialize in placing doctors, surgeons, and medical professionals in roles that align with their skills and aspirations.</h4>
        </div>
    </div>

    <div className="card">
        <img src="https://i.postimg.cc/65L49m5h/JOB-IMG.jpg" alt="" />
        <div className="card-content">
            <h3>PLACEMENT FOR JOB SEEKERS</h3>
            <br />
            <h4>We understand that each career path is unique. Our expert consultants take the time to understand your aspirations, skills, and preferences to tailor our services to your individual needs. </h4>
        </div>
    </div>

    <div className="card">
        <img src="https://i.postimg.cc/jdgKQH8b/IT-IMG.jpg" alt="" />
        <div className="card-content">
            <h3>WEB DEVELOPMENT</h3>
           <br />
            <h4>Your success is our priority. We collaborate closely with our clients to understand their goals, challenges, and aspirations. This client-centric approach allows us to tailor solutions that not only meet but exceed expectations.</h4>
        </div>
    </div>

    <div className="card">
        <img src="https://i.postimg.cc/sXcbfzqr/MARKETING.jpg" alt="" />
        <div className="card-content">
            <h3>DIGITAL MARKETING</h3>
           <br />
            <h4>We don't just execute campaigns; we craft strategic journeys. Our team of digital experts combines creativity with data-driven insights to develop tailored strategies that resonate with your audience.</h4>
        </div>
    </div>
</div>
   
    </>
  )
}

export default More
