import React, { useState, useEffect } from 'react';
// jsconfig => absolute path setting
import Navbar from 'components/Navbar';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHilight';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';


const HomePage = () => {
  

  return (
    <>
      <Navbar />
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />      
    </>
  )
}


export default HomePage;
