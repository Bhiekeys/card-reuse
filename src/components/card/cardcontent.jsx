/** @format */

import React from 'react';

const CardContent = ({ title, description, image, color }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        borderTop: `2px solid ${color}`,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
       
        paddingTop: '20px',
        width: '310px',
        marginBottom: '20px',
        height: '200px',
        boxShadow: '1px 2px 5px grey',
      }}>
      <h2 className='font-semibold'>{title}</h2>
      <p>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <img src={image} />
      </div>
    </div>
  );
};

export default CardContent;
