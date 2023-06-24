/** @format */

import React from 'react';
import CardContent from './cardcontent';
import supervisor from '../../assets/image/icon-supervisor.svg';
import karma from '../../assets/image/icon-karma.svg';
import calculator from '../../assets/image/icon-calculator.svg';
import teamBuilder from '../../assets/image/icon-team-builder.svg';

const Card = () => {
  return (
    <div
      className="card-wrapper "
      style={{
        display: 'flex',
        marginTop: '40px',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <CardContent
        title="Supervisor"
        description=" Monitors activity to identify project roadblocks"
        image={supervisor}
        color="hsl(180, 62%, 55%)"
      />
      <div>
        <CardContent
          title="Team Builder"
          description=" Scans our talent network to create the optimal team for your project"
          image={teamBuilder}
          color="hsl(0, 78%, 62%)"
        />
        <CardContent
          title="Karma"
          description=" Regularly evaluates our talent to ensure quality"
          image={karma}
          color="hsl(212, 86%, 64%)"
        />
      </div>
      <CardContent
        title="Calculator"
        description=" Uses data from past projects to provide better delivery estimates"
        image={calculator}
        color="hsl(180, 62%, 55%)"
      />
    </div>
  );
};

export default Card;
