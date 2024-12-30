import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainScreen from './MainScreen.jsx';
import StoriesPage from './StoriesPage.jsx';
import './App.css';
import ConnectScreen from "@/ConnectScreen.jsx";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="slide"
                    timeout={260}
                >
                    <Routes location={location}>
                        <Route path="/" element={<MainScreen />} />
                        <Route path="/stories" element={<StoriesPage />} />
                        <Route path="/connectScreen" element={<ConnectScreen />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
    );
};

const App = () => {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
};

export default App;
