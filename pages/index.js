import React, { useState, useEffect } from 'react';
// jsconfig => absolute path setting
import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHilight';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';




const HomePage = ({resources}) => {
  
  
  return (
      <Layout>
        <ResourceHighlight resources={resources.slice(0, 2)} />
        <Newsletter />
        <ResourceList resources={resources.slice(2)} />
        <Footer />
      </Layout>
  )
}

export async function getStaticProps() {
  
  const resData = await fetch("http://localhost:3000/api/resources");
  const data = await resData.json();

  return {
    props: {
      resources: data
    }
  }
}


export default HomePage;
