import React from 'react';

const Mission = () => {
    return (
        <div
            className="flex flex-col items-center justify-center bg-white px-60 lg:px-24 smd:px-4 pt-12 pb-32"
            id="mission"
        >
            <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">Transforming Cancer Care</h1>
            <p className="text-lg text-center">
                <span className="font-bold text-xl">Our mission</span> with the PMATCH project is to help people with
                cancer get access to advanced treatment options by making it easier to find suitable clinical trials.
                Currently, it is challenging for doctors and researchers to connect patients with the right trials based
                on their health information. The process of checking whether someone qualifies for a trial requires
                time-consuming manual review of both patient health data and clinical trial information. To solve these
                issues, we are creating PMATCH, a computational platform that will use artificial intelligence (AI) to
                automatically match patients with clinical trials that offer promising cancer treatments.
            </p>
            <hr className="w-3/4 my-8" />
            <p className="text-lg text-center">
                <span className="font-bold text-xl">Our impact</span> aims to address the fact that less than 5% of
                cancer patients join clinical trials, even though 70% of them would do so given the opportunity. By
                using PMATCH to find the right people quickly, we can improve patients’ access to high-quality care,
                help researchers develop better therapies, and save money in the process. Clinical trials are expensive
                to conduct, and many trials struggle to enroll enough participants to answer the research questions
                being studied. PMATCH will also make things easier for busy healthcare professionals by cutting down the
                time and effort needed to gather all of the medical information needed to find the right trials for
                their patients. This added efficiency means that more cancer patients can be screened and be considered
                for available trial opportunities.
            </p>
        </div>
    );
};

export default Mission;
