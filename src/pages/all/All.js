import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Body from '../../components/body/Body';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/testimonials/Testimonials';


const All = () => {
  return (
    <div className='black'>
      <Navbar />
      <Body />
      <Featured />
      <Testimonials />
      <Footer />     
    </div>
  )
}

export default All
