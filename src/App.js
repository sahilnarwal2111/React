// import logo from './logo.svg';
// import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); 
  const [alert, setAlert] = useState(null);
  //we are making alert as a object

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      // setTimeout(() => {
      //   setAlert(null)
      // }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2e3093';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (     
    <>
    {/* <Router> */}
    <Navbar title = "TextUtile" mode = {mode} toggleMode={toggleMode} />
    {/* <Alert alert={alert}/> */}
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
            </Route>
          </Switch> */}
    {/* <About></About> */}
          <TextForm heading="Enter the text to analyze" showAlert = {showAlert} mode = {mode} />
    </div>
    {/* </Router> */}
    </>   
  );
} 

export default App;
 