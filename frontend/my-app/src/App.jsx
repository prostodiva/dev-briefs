import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import PracticePage from './pages/PracticePage';
import QuickTips from './pages/QuickTips';
import Navbar from "./components/Navbar.jsx";
import TutorialsPage from "./pages/TutorialsPage.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/interview" element={<InterviewPrepPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/tips" element={<QuickTips />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
        </Routes>
    );
};

const App = () => {
  return (
    <>
        <Navbar />
        <AppRoutes />
    </>
  );
};

export default App;
