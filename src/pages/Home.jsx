import React from 'react';
import Landing from '../components/sub-pages/Landing';
import Mission from '../components/sub-pages/Mission';
import Overview from '../components/sub-pages/Overview';
import Team from '../components/sub-pages/Team';
import Break from '../components/sub-pages/Break';

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Landing />
            <Mission />
            <Break image="puzzle-board.png" />
            <Overview />
            <Break image="red-heart.jpg" />
            <Team />
        </div>
    );
};

export default Home;
