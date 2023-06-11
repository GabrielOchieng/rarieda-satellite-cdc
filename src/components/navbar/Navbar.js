import './navbar.css';
import {Link} from 'react-scroll';
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateWhat = () =>{
    navigate('/what');
  };

  const navigateWork = () =>{
    navigate('/work')
  }
  const navigateHome = () =>{
    navigate('/')
  }

  
   

  return (
    <div className='navbar'>
      <div className="navContainer">
        <div className="navHeader">
        <h1 className='logo'>KE 0387 RARIEDA KALOO SATELLITE PROJECT</h1>
        </div>
      <div className="navItems">
        <Link to="home" onClick={navigateHome}  className="spanIcon navButton"><h5>Home</h5> <GoChevronDown className='hidden' /></Link>
        <Link to="about" smooth={true} duration={500}  className="spanIcon navButton"><h5 >About us</h5> <GoChevronDown className='hidden'/></Link>
        <Link to="home" onClick={navigateWork} className='spanIcon navButton'><h5 >How we work</h5> <GoChevronDown /> </Link>
        <Link to="home" onClick={navigateWhat} className='spanIcon navButton'><h5>What we do</h5> <GoChevronDown /></Link>       
        <Link to="involved" smooth={true} duration={3000} className='spanIcon navButton'><h5>Get involved</h5> <GoChevronDown /></Link> 
        

      </div>
      </div>
      
    </div>
  )
}

export default Navbar
