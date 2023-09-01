import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
 
function App() {
  return (
    <div className="App">
            <Routes>
              <Route path='/' Component={Home}/>
            </Routes>
    </div>
  );
}

export default App;
