import React from 'react';
import Landing from '../components/sub-pages/Landing';
import Mission from '../components/sub-pages/Mission';
import Overview from '../components/sub-pages/Overview';
import Team from '../components/sub-pages/Team';
import Break from '../components/sub-pages/Break';
import Footer from '../components/navigation/Footer';
import News from '../components/sub-pages/News';
import Navbar from '../components/navigation/Navbar';

const Home = () => {
    return (
        <div className="w-full flex flex-col">
            <Navbar />
            <Landing />
            <Mission />
            <Break image="puzzle-pieces.png" />
            <Overview />
            <Break image="puzzle-pieces-2.png" />
            <Team />
            <Break image="puzzle-pieces.png" />
            <News />
            <Footer />
        </div>
    );
};

export default Home;
