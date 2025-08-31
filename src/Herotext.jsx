// components/HeroText.jsx
import React from 'react';
import DottedLetter from './DottedLetter';
import { letterGrids } from './letterData';
import { FaGithub, FaLinkedin, FaFileAlt, FaFlask } from 'react-icons/fa';

const HeroText = () => {
  const firstName = 'SUJIT';
  const lastName = 'SAKORE';

  const buttons = [
    { label: 'GitHub', icon: <FaGithub />, link: 'https://github.com/SujitSakore' },
    { label: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/sujitsakore/' },
    { label: 'Resume', icon: <FaFileAlt />, link: '' },
  ];

  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center space-y-4">

      {/* First Name */}
      <div className="flex justify-center gap-3">
        {firstName.split('').map((char, idx) => (
          <DottedLetter key={`first-${idx}`} grid={letterGrids[char]} />
        ))}
      </div>

      {/* Last Name */}
      <div className="flex justify-center gap-3">
        {lastName.split('').map((char, idx) => (
          <DottedLetter key={`last-${idx}`} grid={letterGrids[char]} />
        ))}
      </div>
    </div>
  );
};

export default HeroText;
