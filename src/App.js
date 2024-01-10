import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   <Navbar title="Softwork"/>
    <div className="container">
      <TextForm headingText="Text to analyze !" />
    </div>
    
    </>
  );
}

export default App;
