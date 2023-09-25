import React from 'react';
import '../../../styles/Menubar.scss';
import { FaFlag, FaStar, FaRocket, FaClock } from 'react-icons/fa'; // You can choose your own icons

const Menubar: React.FC = () => {
  return (
    <div className="menubar">
      <div className="icon">
        <FaFlag />
      </div>
      <div className="icon">
        <FaStar />
      </div>
      <div className="icon">
        <FaRocket />
      </div>
      <div className="icon">
        <FaClock />
      </div>
    </div>
  );
};

export default Menubar;