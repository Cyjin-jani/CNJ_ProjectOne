import React, { useState, useEffect } from 'react';
// jsconfig => absolute path setting
import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHilight';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';


const HomePage = () => {
  

  return (
      <Layout>
        <ResourceHighlight />
        <Newsletter />
        <ResourceList />
        <Footer />
      </Layout>
  )
}


export default HomePage;
