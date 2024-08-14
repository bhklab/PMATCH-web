import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectRoutes from './routes/routes';

const App = () => {
    return (
        <Router>
            <ProjectRoutes />
        </Router>
    );
};

export default App;
