import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import './styles.css';
import data from './data';

function App() {
  const cardElements = data.map((entry) => (
    <Card key={entry.id} entry={entry} />
  ));
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cardElements}</section>
    </div>
  );
}

export default App;
