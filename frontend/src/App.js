import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/pages/Main';
import ArtDetails from './components/pages/ArtDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Main />}/>
          <Route path="/artdetails" exact element={<ArtDetails />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
