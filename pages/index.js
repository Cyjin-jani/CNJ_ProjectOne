import React, { useState, useEffect } from 'react';
// jsconfig => absolute path setting
import Layout from 'components/Layout';
import Newsletter from 'components/Newsletter';
import ResourceHighlight from 'components/ResourceHilight';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';

const HomePage = ({ resources }) => {
  // CORS ISSUE
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/resources');
  // }, []);

  // 해결책 1 (pages/api/resources에서 fetch로 데이터 가져오기)
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/resources');
  // }, []);
  // 해결책 2 ServerSide에서 CorsOption을 활용하여 3000번 포트에서 접근 가능하도록 설정
  // useEffect(() => {
  //   fetch('http://localhost:3001/api/resources');
  // }, []);

  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  );
};

// is called at the build time, and it's called only once
// make index.html file
// export async function getStaticProps() {

//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();

//   return {
//     props: {
//       resources: data
//     }
//   }
// }

// is called every time you will visit the page
// function is executed on the server
// data is always fresh
export async function getServerSideProps() {
  const resData = await fetch('http://localhost:3001/api/resources');
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default HomePage;
