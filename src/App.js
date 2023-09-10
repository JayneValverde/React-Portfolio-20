import "./App.css";
import React, { useState } from "react";
import './global-styles/global.css';
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage';
import Projects from './components/Projects/projects'


// function App() {
//   return (
//   <div className='App'>
//     <Homepage />
  
//   </div>
//   )
// }

function App() {
    const [currentTab, setCurentTab] = useState("homepage");

    const renderTab = () => {
      switch (currentTab) {
        case 'homepage':
          return <Homepage/>;
          case "portfolio":
            return <Projects/>
        default: 
        return null;
        
    }
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurentTab}></Header> 
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
    </div>
  );
}



export default App;