import React from 'react';
import { Link } from 'react-scroll';

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
        <div className="py-14 px-60 md:px-24 smd:px-4" id="overview">
            <h1 className="text-red-1000 text-5xl font-bold mb-8 text-center">Overview</h1>
            <p className="text-headingLg text-center font-bold mb-8">
                PMATCH will serve as a new digital tool that will...
            </p>
            <div className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap mb-12">
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
            <h2 className="text-headingXl font-bold mb-8">Design & Implementation</h2>
            <p className="text-lg md:text-md mb-10">
                PMATCH brings together all the information needed for clinical trial matching{' '}
                <Link
                    to={'figure-1'}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-red-1000 hover:underline cursor-pointer"
                >
                    (Figure 1)
                </Link>
                . Clinicians and trialists will use PMATCH directly to match patients to trials and to set trial
                eligibility rules. Doctors will get alerts or search quickly for trials based on their patients’ health
                information, while researchers can use patient data to find potential participants for their trials. When a
                patient qualifies for multiple trials, PMATCH will recommend the best one based on available genomic
                data.
            </p>
            <h2 className="text-headingXl font-bold mb-8">Long Term Vision & Future Developments</h2>
            <p className="text-lg">
                PMATCH will be a flexible system that makes it easy to match cancer patients with clinical trials in a
                fair and efficient way. In five years, we hope to see PMATCH used across all major Canadian cancer
                centers. In the future, patients may be able to use PMATCH directly to learn about trials they could
                join, allowing them to make the most of their time spent with doctors.
            </p>
            <div className="w-full py-10" id="figure-1">
                <img src="/images/diagrams/workflow-diagram.jpg" className="w-full" />
            </div>
        </div>
    );
};

export default Overview;
