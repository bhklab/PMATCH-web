import React from 'react';
import Landing from '../components/sub-pages/Landing';
import Mission from '../components/sub-pages/Mission';
import Overview from '../components/sub-pages/Overview';
import Team from '../components/sub-pages/Team';

const Home = () => {
    return (
        <div className="w-full">
            <Landing />
            <Mission />
            <Overview />
            <Team />
        </div>
    );
};

export default Home;
