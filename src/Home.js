import React from "react";
import { Helmet } from "react-helmet-async";
import MyCounter from "./Component/MyCounter";
import Header from "./Component/Header";

//create the home page component
function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Counter Application" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />
      <MyCounter />
    </>
  );
}

export default Home;
