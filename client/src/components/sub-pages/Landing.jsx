import React from 'react';

const Landing = () => {
    return (
        <div className="w-full h-screen bg-[url('/images/wallpapers/pmatch-wallpaper-test2.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
            <h1 className="text-9xl text-white mb-4 font-extrabold text-center" id="landing">
                PMATCH
            </h1>
            <h2 className="text-5xl text-white text-center">Matching patients to clinical trials</h2>
        </div>
    );
};

export default Landing;
