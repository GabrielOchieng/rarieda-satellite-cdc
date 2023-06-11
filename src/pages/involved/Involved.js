import React from 'react';
import './involved.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Involved = () => {

  return (
    <div>
        <Navbar />
        <hr />
        <div className="elements">
            <h6>Contact us</h6>
            <hr />
            <h6>Volunteer</h6>
            <hr />
            <h6>Donate</h6>
        </div>
        <hr />

        <div className="contact">
            <h1>CONTACT FORM</h1>
            <form action="">
                <div className='input'>
                <label>Subject</label>
                <input type="text"/>
                </div>
                
                <div className='input'>
                <label>First name</label>
                <input type="text" placeholder='First Name'/>
                </div>
                
                <div className='input'>
                <label>Last name</label>
                <input type="text" placeholder='Last Name'/>
                </div>
                
                <div className='input'>
                <label>Email</label>
                <input type="text" placeholder='Email'/>
                </div>
                
                <div className='input'>
                <label>Phone</label>
                <input type="number" placeholder="Phone"/>
                </div>
                
                <div className='input'>
                <label>Country</label>
                <input type="text" placeholder='Kenya'/>
                </div>
                
                <div className='input'>
                <label>Address</label>
                <input type="text" />
                </div>
                
                <div className='input'>
                <label>City</label>
                <input type="text" placeholder='City'/>
                </div>
                
                <div className='input'>
                <label>Message</label>
                <input className=' message' type="text"/>
                </div>

                <div className="input">
                    <button className="button">Submit</button>
                </div>
                

            </form>
        </div>

        <hr />

        <div className="donate">
            <div className="word">
            <h1>DONATE</h1>
            <p>Your support is critical in ensuring that our children grow holistically</p>
            </div>
            <div className="figure">
                <h4>Send any amount to:</h4>
                <h2>PAYBILL NUMBER: 4062365</h2>
                <h2>ACCOUNT NUMBER: RARIEDACDC</h2>

                <h5>Every coin counts</h5>
            </div>
            
        </div>
        <hr />
      <Footer />
    </div>
  )
}

export default Involved
