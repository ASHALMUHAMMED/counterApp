import React,{useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [count,setCount] = useState(0)

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  let color = "white";
  if(count >= 1){
    color = "yellow"
  }else if (count <= -1){
    color = "red"
  }else{
    color = "white"
  }
  return (

   <section className='counter-sec'>

      <div className='counter'>

          <h1>React Counter App</h1>

        <div className='display-sec'>  
          <p className='count' style={{color:color}}>{count}</p>
        </div>  

        <div className='buttons'>
          <Button className='button' variant="danger" onClick={handleSubstract}>- Substarct</Button>
          <Button className='button' variant="light" onClick={handleReset}>! Reset</Button>
          <Button className='button' variant="success" onClick={handleAdd}>+ Add</Button>
        </div>

      </div>

   </section>
      
  )
}

export default App;
