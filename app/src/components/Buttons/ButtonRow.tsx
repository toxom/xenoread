// ButtonRow.tsx

import React, { ReactNode } from 'react';
import './Buttons.scss';

interface ButtonRowProps {
  label: string;
  children: ReactNode;
}

const ButtonRow: React.FC<ButtonRowProps> = ({ label, children }) => {
  return (
    <div className="ButtonRow">
      <div className="label">{label}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ButtonRow;
