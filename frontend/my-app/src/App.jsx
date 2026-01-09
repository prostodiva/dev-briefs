import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AboutPage from './pages/AboutPage';
import CardPage from "./pages/CardPage.jsx";
import HomePage from './pages/HomePage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import PracticePage from './pages/PracticePage';
import QuickTips from './pages/QuickTips';
import QuizzesPage from "./pages/QuizzesPage.jsx";
import SubscribePage from "./pages/SubscribePage.jsx";
import TutorialsPage from "./pages/TutorialsPage.jsx";
import InterviewRecPage from "./pages/InterviewRecPage";
import ProjectsPage from "./pages/ProjectsPage.jsx";

const AppRoutes = () => {
    return (
        <Layout>
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
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/card" element={<CardPage />} />
                <Route path="/recordings" element={<InterviewRecPage />} />
            </Routes>
        </Layout>
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
