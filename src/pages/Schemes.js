import React from 'react';
import schemesData from '../data/schemesData';
import SchemeCard from '../components/SchemeCard';


const Schemes = () => {
  return (
    <div>
      <h1>Available Schemes</h1>
      <div className='row'>
        {schemesData.map(scheme => (
          <div className='col-md-4 mb-4' key={scheme.id}>
            <SchemeCard scheme={scheme} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schemes;
