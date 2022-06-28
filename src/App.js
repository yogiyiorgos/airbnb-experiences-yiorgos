import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles.css';

import katieImg from './images/katie-zaferes.png';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Card
        img={katieImg}
        alt='Katie Zaferes smilling in swimsuit'
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}

export default App;
