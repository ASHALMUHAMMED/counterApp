import React,{useState} from 'react'
import './Display.css'


function Display() {
  const [count,setCount] = useState(0);

  const handleSubstract = () => {
    setCount(count - 1);
  };
  return (
    <div className='display-sec'>
      <p className='count'>{count}</p>
    </div>
  )
}

export default Display
