import React from 'react';
import Landing from '../components/sub-pages/Landing';
import Mission from '../components/sub-pages/Mission';
import Overview from '../components/sub-pages/Overview';
import Team from '../components/sub-pages/Team';
import Break from '../components/sub-pages/Break';
import Future from '../components/sub-pages/Future';
import Footer from '../components/navigation/Footer';

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Landing />
            <Mission />
            <Break image="puzzle-pieces.png" />
            <Overview />
            <Break image="red-heart.jpg" />
            <Team />
            {/* <Break image="puzzle-pieces.png" /> */}
            {/* <Future /> */}
            <Footer />
        </div>
    );
};

export default Home;
