import './global-styles/global.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Proejcts';
import Footer from './components/Footer/Footer';

// Commented out (Default Function App)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
