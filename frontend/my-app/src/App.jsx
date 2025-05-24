import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import PracticePage from './pages/PracticePage';
import QuickTips from './pages/QuickTips';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/interview" element={<InterviewPrepPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/tips" element={<QuickTips />} />
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
