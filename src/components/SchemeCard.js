import React from 'react';

const SchemeCard = ({ scheme }) => {
  return (
    // <div className="scheme-card">
    //   <h3>{scheme.title}</h3>
    //   <p>{scheme.description}</p>
    //   <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
    //   <p><strong>Benefits:</strong> {scheme.benefits}</p>
    //   <a href={scheme.link}>More Info</a>
    // </div>
    <div className="card" style={{ width: '18rem' }}>
    <img src={scheme.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{scheme.title}</h5>
      <p className="card-text">{scheme.description}</p>
      <p className="card-text">{scheme.eligibility}</p>
      <p className="card-text">{scheme.benefits}</p>
      <a href="#" className="btn btn-primary">{scheme.link}</a>
    </div>
  </div>
  );
}

export default SchemeCard;