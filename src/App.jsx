import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from './colorSlice';
import './index.css'


function App() {
  const [inputColor, setInputColor] = useState('');
  const color = useSelector((state) => state.color);
  const dispatch = useDispatch();
  
  const handleColorChange = (event) => {
    setInputColor(event.target.value);
  };

  const applyBackgroundColor = () => {
    dispatch(setColor(inputColor));
  };

  return (
    <div style={{ backgroundColor: color, width: '100%', height: '100vh' }} className='bgchange'>
      <input type="text" value={inputColor} onChange={handleColorChange} placeholder="Enter Color Name" />
      <button onClick={applyBackgroundColor}>Apply Color</button>
      {/* <div style={{ backgroundColor: color, width: '100%', height: '100vh' }}></div> */}
    </div>
  );
}

export default App;