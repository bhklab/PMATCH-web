import React from 'react';

const Overview = () => {
    const overview = [
        {
            text: 'Contain relevant information of all ongoing clinical trials in Canada',
            image: '/images/icons/canada-mark-icon.svg'
        },
        { text: 'Increase the number of patients matched to trials', image: '/images/icons/patients-icon.svg' },
        {
            text: 'Make it easier to create and expand clinical trials',
            image: '/images/icons/clinical-trials-icon.svg'
        }
    ];
    return (
        <div className="py-14" id="overview">
            <h1 className="text-red-1000 text-5xl font-bold mb-8 text-center">Overview</h1>
            <p className="text-headingLg text-center font-bold mb-8">
                PMATCH will serve as a new digital tool that will...
            </p>
            <div className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap mb-10">
                {overview.map((item, index) => (
                    <div
                        className="flex flex-col px-10 py-10 md:px-6 md:py-6 shadow-lg gap-4 justify-center items-center border-solid border-1 rounded-lg w-[275px] h-[275px]"
                        key={item.image}
                    >
                        <p className="text-headingXl font-semibold">{index + 1}.</p>
                        <p className="text-headingMd">{item.text}</p>
                        <img src={item.image} alt={item.image} className="w-20" />
                    </div>
                ))}
            </div>
            <h2 className="text-heading2Xl text-center font-bold mb-8">Design & Implementation</h2>
            <p className="text-lg text-center px-96 xl:px-10 mmd:px-4">
                The PMATCH project focuses on helping people with cancer access advanced treatment options by making it
                easier to find suitable clinical trials. Currently, it is challenging for doctors and researchers to
                connect patients with the right trials based on their health information. The process of checking
                whether someone qualifies for a trial requires time-consuming manual review of both patient health data
                and clinical trial information. To solve these issues, we are creating PMATCH, a computational platform
                that will use artificial intelligence (AI) to automatically match patients with clinical trials that
                offer promising cancer treatments.
            </p>
        </div>
    );
};

export default Overview;
