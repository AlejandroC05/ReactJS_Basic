/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import Card from './components/Card';
import vehicles from './data/vehicles';
import ShowHide from './components/ShowHide';

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} image={v.image}/>;
  }
  );

  /*
  const vehicleImg = vehicles.map((i) => {
    return (
      <div>
        {vehicles.map((img) => (
          <div key={i.title}>
            <img src={i.image} alt={img.name} />
          </div>
        ))}
      </div>
    );
  })
  */

  return <div className='App'>
    <h1>ReactJS Básico</h1>
      <div>
        <ShowHide />
      </div>
      <div className='container'>
        {vehicleList}
      </div>
    </div>;

}

export default App
