import './App.css';
import NavBar from './components/NavBar/NavBar';
import LeftPanel from './components/MainPage/LeftPanel/LeftPanel';
import StatusBar from './components/MainPage/StatusBar/StatusBar';
import RightPanel from './components/MainPage/RightPanel/RightPanel';


// import Layout from './components/MainPage/Layout';
// import Login from './components/Login/Login';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />

      <div className="app__body">
        <LeftPanel />
        <StatusBar /> 
        <RightPanel />
        
        {/* Feed */}
        {/* Widgets */}

      </div>
      
    </div>
  );
}

export default App;


