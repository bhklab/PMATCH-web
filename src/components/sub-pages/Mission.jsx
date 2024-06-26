import React from 'react';

const Mission = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-white px-96 xl:px-60 mmd:px-4 sm:px-1 py-16"
            id="mission"
        >
            <h1 className="text-red-1000 text-5xl font-bold mb-8 text-center">Our Mission</h1>
            <p className="text-lg text-center">
                The PMATCH project aims to streamline the process of matching cancer patients with clinical trials by
                developing an AI-driven platform. This will simplify the process for doctors and researchers, making it
                quicker and easier to connect patients with suitable advanced treatment options.
            </p>
            <hr className="w-1/2 my-8" />
            <p className="text-lg text-center">
                <span className="font-bold">Less than 5%</span> of cancer patients join clinical trials, despite many
                being willing. PMATCH uses AI to quickly match these patients with suitable trials, enhancing access to
                quality care and aiding therapy development while reducing costs. It also simplifies the process for
                healthcare professionals, enabling more patients to be considered for trials.
            </p>
        </div>
    );
};

export default Mission;
