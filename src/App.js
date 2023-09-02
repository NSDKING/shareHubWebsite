import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import StaffPage from './pages/staffPage';
import Form from './pages/Form';
import CreateQuestion from './pages/CreateQuestion';
import QuestionsManager from './pages/QuestionsManager';
import StatPage from './pages/stat';
 
function App() {
  return (
    <div className="App">
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/register' Component={Register}/>
              <Route path='/form' Component={Form}/>
              <Route path='/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion-question-managerdkdkddpzozov' Component={QuestionsManager}/>
              <Route path='/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecrett-é&createquestion' Component={CreateQuestion}/>
              <Route path="/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecret" Component={StaffPage}/>
              <Route path="/staf-link-special-**dkd*dkdkcmm*-secret-sharehub-secrecyact-cmrsecrecyact-dontshareititsecret-sissoskxoi-stat-page-question-manager" Component={StatPage}/>

            </Routes>
    </div>
  );
}

export default App;
