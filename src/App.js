import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LearningStyle from './LearningStyle';
import Navbar from './Navbar';
import Personality from './Personality';
import StartSurvey from './StartSurvey';
import SurveyResult from './SurveyResult';
import Chronotype from './Chronotype';
import Survey3Result from './Survey3Result';
import CalendarPage from './CalendarPage';
import MBTI from './MBTI';
import Survey2Result from './Survey2Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route style={({ isActive }) => ({ color: isActive ? "orange" : "red" })} path="/personality" element={<Personality/>} />
            <Route path="/learningstyle" element={<LearningStyle/>} />
            <Route path="/surveyresult" element={<SurveyResult/>} />
            <Route path="/startsurvey" element={<StartSurvey/>} />
            <Route path="/chronotype" element={<Chronotype/>} />
            <Route path="/survey3result" element={<Survey3Result/>} />
            <Route path="/calendar" element={<CalendarPage/>} />
            <Route path="/mbti" element={<MBTI/>} />
            <Route path="/survey2result" element={<Survey2Result/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
