import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
        </Routes>
    );
};

export default ProjectRoutes;
