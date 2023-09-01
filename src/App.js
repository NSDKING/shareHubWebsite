import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import StaffPage from './pages/staffPage';
import Form from './pages/Form';
import CreateQuestion from './pages/CreateQuestion';
 
function App() {
  return (
    <div className="App">
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/register' Component={Register}/>
              <Route path='/form' Component={Form}/>
              <Route path='/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion' Component={CreateQuestion}/>
              <Route path="/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecret" Component={StaffPage}/>
            </Routes>
    </div>
  );
}

export default App;
