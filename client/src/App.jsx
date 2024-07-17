import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import ProjectRoutes from './routes/routes';

const App = () => {
    return (
        <Router>
            <Navbar />
            <ProjectRoutes />
        </Router>
    );
};

export default App;
