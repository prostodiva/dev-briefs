import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/home" element={<HomePage />} />
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
