import './App.css';
import Navbar from './components/Navbar.jsx'
import MainContent from './components/MainContent.jsx';
import MainCanvas from './components/MainCanvas.jsx';
import AboutContent from './components/AboutContent.jsx';
import Alert from './components/Alert.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import { useState } from 'react';
function App(){
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('light');
  function showAlert(message, type){
    setAlert({message: message, type: type});
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function closeAlert(){
    setAlert(null);
  }

  function toggleTheme(){
    theme==='light'?setTheme('dark'):setTheme('light');
  }
  return (
    <div className='vh-100 vw-100' >
      <Router>
      <Navbar title='Dbcrafter' theme={theme} toggleTheme={toggleTheme}/>
      <Alert alert={alert} closeAlert={closeAlert}/>
        <Routes>
          <Route exact path='/' element={<MainContent theme={theme} showAlert={showAlert}/>}/>
          <Route exact path='/signup' element={<MainContent type='signup' theme={theme} showAlert={showAlert}/>}/>
          <Route exact path='/craft' element={<MainCanvas showAlert={showAlert} theme={theme} />}/>
          <Route exact path='/about' element={<AboutContent theme={theme}/>}/>
        </Routes>
      </Router>
    </div> 
  )
}

export default App;