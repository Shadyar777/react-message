import React from 'react';
import preloader from '../../../assets/Loader.gif';

const Preloader = () => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <img src={preloader} alt='this img loader' />
    </div>
  );
};

export default Preloader;
