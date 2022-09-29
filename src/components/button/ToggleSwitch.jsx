import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({id}) => {
  return (
    <div className='onoffswitch'>
      <input type='checkbox' name='onoffswitch' className='onoffswitch-checkbox' id={id} tabIndex='0' onChange='checked' />
      <label className='onoffswitch-label' htmlFor={id}></label>
    </div>
  );
};

export default ToggleSwitch;
