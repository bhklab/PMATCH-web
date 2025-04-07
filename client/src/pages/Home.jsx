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
            <Break image="puzzle-new-1-test.png" />
            <Mission />
            <Break image="puzzle-new-2-test.png" />
            <Overview />
            <Break image="puzzle-new-3-test.png" />
            <Team />
            <Break image="puzzle-new-4-test.png" />
            <News />
            <Footer />
        </div>
    );
};

export default Home;
