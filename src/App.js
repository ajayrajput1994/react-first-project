import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [modeis,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1200);
  }
  const toggleMode=()=>{
    if(modeis==="dark"){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled !","success");
    }else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled !","success");
    }
  }
  return (
    <>
    <Router>
   <Navbar title="Softwork" mode={modeis} toggleMode={toggleMode} />
   <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} headingText="Text to analyze !" mode={modeis} />} />
          
          <Route exact path="/about" element={<About/>} />
        </Routes>
      
    </div>
    </Router>
    </>
  );
}

export default App;
