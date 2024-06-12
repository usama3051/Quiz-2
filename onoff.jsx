import React, { useState } from 'react';

const LightSwitch = () => {
  
  const [isLightOn, setIsLightOn] = useState(false);

  
  const toggleLight = () => {
    setIsLightOn(prevState => !prevState);
  };


  const buttonStyle = {
    backgroundColor: isLightOn ? 'yellow' : 'gray',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      {/* Display the current state of the light */}
      <p>The light is {isLightOn ? 'on' : 'off'}</p>
      {/* Button to toggle the light's state */}
      <button style={buttonStyle} onClick={toggleLight}>
        Toggle Light
      </button>
    </div>
  );
};

export default LightSwitch;
