import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import PracticePage from './pages/PracticePage';
import QuickTips from './pages/QuickTips';
import TutorialsPage from "./pages/TutorialsPage.jsx";
import SubscribePage from "./pages/SubscribePage.jsx";
import QuizzesPage from "./pages/QuizzesPage.jsx";
import ChallengePage from "./pages/ChallengePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/interview_questions" element={<InterviewPrepPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/quick_tips" element={<QuickTips />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/challenge" element={<ChallengePage />} />
        </Routes>
    );
};

const App = () => {
  return (
    <>
        <AppRoutes />
    </>
  );
};

export default App;
