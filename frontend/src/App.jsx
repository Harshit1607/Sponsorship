import CreateAccount from './Components/Auth/CreateAccount';
import SponsorsList from './Components/HomePage/SponsorsList';
import LandingPage from './Components/LandingPage/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/Create' element={<CreateAccount />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<SponsorsList />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
