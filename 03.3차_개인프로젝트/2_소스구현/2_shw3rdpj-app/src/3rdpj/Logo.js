import React from 'react';

import isrc from './Imgsrc';

const Logo = () => {
  const logostyle = {
    width: '81px',
    height: '81px',
    outline: '2px solid red',
  };

  return (
    <h1 style={logostyle}>
      <img src={isrc.logo} style={{ width: '81px' }} />
    </h1>
  );
}; /////Logo//////////

export default Logo;
