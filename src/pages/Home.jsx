import React from 'react';
import Landing from '../components/sub-pages/Landing';
import Mission from '../components/sub-pages/Mission';
import Overview from '../components/sub-pages/Overview';

const Home = () => {
    return (
        <div className="w-full">
            <Landing />
            <Mission />
            <Overview />
        </div>
    );
};

export default Home;
