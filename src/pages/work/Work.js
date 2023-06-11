import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './work.css';

const Work = () => {
  return (
    <div>
        <Navbar />
        <hr />
        <div className="main">
        <div className="how">
            <h3>PARTNERSHIPS</h3>
            <p>We partner with Compassion International Kenya with the mission of "Releasing children from poverty in Jesus' name." We are also open to partnerships with like-minded organizations/individuals who advocate for children's rights and have a compassion for the vulnerable.</p>
        </div>
        <div className="how">
            <h3>OUR BOARD</h3>
            <p>We are a church-based project which adheres to the Christian values. Consequently, the church committee oversees all the activites within the project.</p>
        </div>
        <div className="how">
            <h3>STAFF</h3>
            <p>We have three main staff  <strong>(The Project Director, The Project Accountant and the Project Social Worker)</strong> who are assisted by Part-time teachers during our programs with the participants.</p>
        </div>
        </div>
        
        <hr />
        <Footer />
      
    </div>
  )
}

export default Work
