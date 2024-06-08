
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null)
  },1000);
}

const toggleMode = ()=>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert("Dark mode has been enable", "success");
  document.title = 'TextUtile-Dark mode'
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("light mode has been enable", "success");
  document.title = 'TextUtile-Light mode'


}
}
  return (
    <>
{/* <Router> */}
{/* <Navbar title ="TextUtils" aboutText="About Us"/> */}
<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="about"/>
<Alert alert={alert}/>
<div className="container">
{/* <Switch>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/"> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    {/* </Route>
  </Switch> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
