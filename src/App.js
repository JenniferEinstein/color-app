import { useState } from 'react'
import './App.css';

function App() {
  const [color, setColor] = useState("ruby");
  const [counter, setCounter] = useState(0);
      //booleans
  const [defaultFontColor, toggleFontColor] = useState(true);


function changeColor() {
  const chooseIndex = Math.floor(Math.random() * colors.length);
   setColor(colors[chooseIndex]);
   setCounter(counter+1);
  }

const colors = [
  "papayawhip",
  "thistle",
  "peachpuff",
  "lightgoldenrodyellow",
  "paleturquoise",
  "#eda690",
  "brown",
  "crimson",
  "olive",
  "azure",
  // "#ada691",
  // "#bda692",
  // "#cda693",
  // "#dda694",

]

function resetCounter() {
  setCounter(0);
  setColor("azure");
}

function toggleFontColors() {
  toggleFontColor(!defaultFontColor)
}
  return (
    <div className="App" style={{height: "100vh", backgroundColor: color}}>
      <button onClick={changeColor}>Change color</button>
      <button onClick={resetCounter}>Reset Counter</button>
      <button onClick={toggleFontColors}>Toggle font color</button>
      <h2>{color}</h2>
      <h3 style={defaultFontColor ? {color:"black"} : {color:"white"}}>The color has been changed {counter} times.</h3>
      {/* <h3>The font color has been changed {} times.</h3> */}
    </div>
    
  );
}

export default App;
