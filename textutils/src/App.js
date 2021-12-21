import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

  const toggleMode = ()=>{
    if(mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      setAlert("Dark mode enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      setAlert("light mode enabled");

    }
  }

  return (

    <>

     <Navbar title="Abhinav" aboutText="About Abhinav" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert}/>
       <div className="container">
        <Textform heading="Enter Your Text To Analyze" mode={mode}/>
      </div>  

      {/* <About/> */}

    </>

  );
}

export default App;
