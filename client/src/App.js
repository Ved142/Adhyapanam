import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentErp from './components/StudentErp';
import MentorErp from './components/MentorErp';
import StudentDash from './components/StudentDash';
import Homepage from './components/homepage/Homepage';
import Mentordash from './components/Mentordash';


function App() {
  
  return (
    <div className="App">
      <Routes >
         <Route exact path="/student" element={<><Navbar /> <StudentErp /></>} />
         <Route exact path="/" element={<><Navbar /><Homepage /></>} />
         <Route exact path="/mentor" element={<><Navbar /><MentorErp /></>} />
         <Route exact path="/link" element={<><Navbar /><StudentDash /></>} />
         <Route exact path="/loggedin/student" element={<><StudentDash /></>} />
         <Route exact path="/loggedin/mentor" element={<><Mentordash /></>} />   
      </Routes>
    </div>
  );
}

export default App;
