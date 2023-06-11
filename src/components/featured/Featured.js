import { useState } from 'react';
import './featured.css'
import { GoX, GoArrowLeft, GoArrowRight } from "react-icons/go";
import Typed from 'react-typed';





const Featured = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    
  
  
    const photos =[
      {
        src:"/pics/CaregiversT.jpeg",
        domain: "Caregivers' training",
      },
      {
        src: "/pics/DemoT.jpeg",
        domain: "Spiritual lesson",
      },
      {
        src: "/pics/Drawing.jpeg",
        domain: "Skills class",
      },
      {
        src: "/pics/Football.jpeg",
        domain: "Physical development",
      },
      {
        src: "/pics/Fun.jpeg",
        domain: "Fun moments",
      },
      {
        src: "/pics/Fun2.jpeg",
        domain: "Fun moments",
      },
      {
        src: "/pics/Fun3.jpeg",
        domain: "Fun moments",
      },
      {
        src: "/pics/Games.jpeg",
        domain: "Physical Health Education",
      },
      {
        src: "/pics/Lesson1P.jpeg",
        domain: "Spiritual lesson",
      },
      {
        src: "/pics/Lesson2P.jpeg",
        domain: "Socio-emotional",
      },
      {
        src: "/pics/Lesson3P.jpeg",
        domain: "Devotion",
      },
      {
        src: "/pics/Lesson4P.jpeg",
        domain: "Socio-emotional",
      },
      {
        src: "/pics/Lesson5P.jpeg",
        domain: "Spiritual domain",
      },
      {
        src: "/pics/LessonC.jpeg",
        domain: "Cognitive",
      },
      {
        src: "/pics/LessonP.jpeg",
        domain: "Socio-emotional class",
      },
      {
        src: "/pics/OutdoorL.jpeg",
        domain: "Child Protection",
      },
      {
        src: "/pics/SingingP.jpeg",
        domain: "Cognitive domain",

      },
      {
        src: "/pics/FunT.jpeg",
        domain: "Fun moments",

      },
      
    ];


    const handleOpen = (i) => {
      setSlideNumber(i)
      setOpen(true)
    };
  
    const handleMove = (direction) => {
      let newSlideNumber;
  
      if(direction === 'l') {
        newSlideNumber = slideNumber === 0 ? 16 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 16 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
  
    }
  
  
  
  
    return (  
      <div className='featured'>
        <div className="hotelContainer">
          {open && <div className="slider">
            <GoX className='close' onClick={()=> setOpen(false)} />
            <GoArrowLeft className='arrow' onClick={()=>handleMove("l")} />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt='' className="sliderImg" />
              <p className='domain'>{photos[slideNumber].domain}</p>
            </div>
            <GoArrowRight className='arrow' onClick={()=>handleMove("r")} />
            </div>}
          <div className="hotelWrapper">
            <h1 className="hotelTitle">Our Featured Activities</h1>
            <div className="hotelAddress">
             <span>We seek to develop our participants in the following domains:</span>
            </div>
            <span className="hotelPriceHighlight">
              <Typed strings={["PHYSICAL", "COGNITIVE", "SPIRITUAL", "SOCIO-EMOTIONAL"]} typeSpeed={120} backSpeed={60} loop />
            </span>
            <span className="hotelDistance">
              As Featured below
            </span>
            
            <div className="hotelImages">
              {photos.map((photo, i) =>(
                <div className="hotelImgWrapper" key={i}>
                  <img onClick={()=>handleOpen(i)} src={photos[i].src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default Featured
