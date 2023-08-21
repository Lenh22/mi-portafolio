import React from 'react';
import './Home.css';
import Nube from 'components/Nube/Nube';
import Header from 'components/Header/Header';
import ParallaxBg from 'components/ParallaxBg/ParallaxBg';


function Home() {
  return (
    <div className="Home">
      {/* <Nube></Nube>
      <Header/> */}
      <ParallaxBg/>
    </div>
  );
}

export default Home;
