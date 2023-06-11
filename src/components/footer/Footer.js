import './footer.css';
import { SiFacebook, SiTwitter, SiWhatsapp } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
// import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




const Footer = () => {
  const [show, setShow] = useState(false);
  const [donate, setDonate] = useState(false);
  const [call, setCall] = useState(false);

  const handleClick = () =>{
    setShow(!show);
    setDonate(false)
  };

  

  const handleDonate = () => {
    setDonate(!donate);
    setShow(false);
  };

  const handleCall = () => {
    setCall(!call);
    setShow(false);
    setDonate(false);
  };





    const navigate = useNavigate();

  const navigateToInvolved = () =>{
    navigate('/involved');
  };


    const copyright = String.fromCodePoint(0x00A9);


  return (
    <div className="mainDiv">
     {show && <div className="contact">
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
        </div> }
        {
          donate && <div className="donate">
          <div className="word">
          <h1>DONATE</h1>
          <p>Your support is critical in ensuring that our children grow holistically</p>
          </div>
          <div className="figure">
              <h4>Send any amount to:</h4>
              <h2>PAYBILL NUMBER: 402365</h2>
              <h2>ACCOUNT NUMBER: RARIEDACDC</h2>

              <h5>Every coin counts</h5>
          </div>
          
      </div>
        }

        {
         call && <div className="call">
          <p>Call GABRIEL: +254-792-390-805</p>
        </div>
        }

      <div className='footer' id='involved'>
        
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Home</li>
                <li className="fListItem">Who we are</li>
                <li className="fListItem">How we work</li>
                <li className="fListItem">What we do</li>
                
                
            </ul>
            <ul className="fList">
                <li name='involved' onClick={navigateToInvolved} className="fListItem">Get Involved</li>
                <li className="fListItem">Volunteer</li>
                <li onClick={handleClick} className="fListItem">Contact Us</li>
                <li onClick={handleDonate} className="fListItem">Donate</li>
                
            </ul>
            <ul className="fList">
                <li className="fListItem">Frequently Asked Questions</li>
                <li className="fListItem">Privacy Policy</li>
                <li className="fListItem">Terms & Conditions</li>
                <li className="fListItem">Child Protection</li>
                
            </ul>
            <ul className="fList fContact">
                <li className="fListItem"> <a href="https://www.facebook.com/gabu.oginga?mibextid=ZbWKwL"  target='blank'><SiFacebook /></a> </li>
                <li className="fListItem"><a href="https://twitter.com/GabrielOginga?t=bX7M5jEevYL2BiQ1ZAhniQ&s=09"  target='blank'><SiTwitter /></a></li>
                <li className="fListItem"><a href="https://api.whatsapp.com/send?phone=+254792390805&text=Hello" target='blank'><SiWhatsapp /></a></li>
                <li onMouseEnter={handleCall} className="fListItem"><a href="tel:+254792390805"><BsTelephoneFill /></a></li>
                
            </ul>
            
        </div>
        <hr />
        <div className="fText">{copyright} 2023 THEGABRIELSHOW. All Rights Reserved</div>
      
    </div>

    </div>
      )
}

export default Footer
