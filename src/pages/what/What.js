import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar';
import './what.css';

const What = () => {
  return (
    <div>
        <Navbar />
    
      <hr />
      <div className="header"><h4>WE SEEK TO DEVELOP OUR PARTICIPANTS ALONG THE FOLLOWING DOMAINS</h4></div>
        <div className="main">
            
        <div className="minor">
            <h3>PHYSICAL DOMAIN</h3>
            <p>The physical domain covers the development of physical changes, which includes growing in size and strength, the development of both gross motor skills. The physical domain also includes the development of the senses.</p>
        </div>
        <div className="minor">
            <h3>SOCIO-EMOTIONAL DOMAIN</h3>
            <p>The social-emotional domain includes a child's growing understanding and control of their emotions. They begin to identify what others are feeling, develop the ability to cooperate and use moral reasoning.</p>
        </div>
        <div className="minor">
            <h3>SPIRITUAL DOMAIN</h3>
            <p>Spiritual development is certainly a process of growth in Christ. God will give you strength and grace to grow during the process of refinement. The Bible portrays spiritual refinement as a journey, as illustrated by the following verses in Scripture</p>
        </div>
        <div className="minor">
            <h3>COGNITIVE DOMAIN</h3>
            <p>The cognitive domain includes intellectual development and creativity. Kids gain the ability to process thoughts, pay attention, develop memories, understand their surroundings, express creativity, as well as to make, implement, and accomplish plans.</p>
        </div>
        <div className="minor">
            <h3>CHILD PROTECTION</h3>
            <p>Child protection is part of the safeguarding process. It focuses on protecting individual children identified as suffering or likely to suffer significant harm. This includes child protection procedures which detail minor to respond to concerns about a child.</p>
        </div>
        <div className="minor">
            <h3>CAREGIVER EMPOWERMENT</h3>
        <p>Empowerment of adults' and elders' family caregivers may be defined as "positive control of one's mind and body, cultivating a positive attitude, proactively attempting to understand one's role as a caregiver to improve caregiving capabilities.</p>
        </div>
        </div>
        
        <hr />
        <Footer />

    </div>
  )
}

export default What
