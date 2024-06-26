import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';

const Team = () => {
    const teams = [
        { name: 'BHK Lab', img: '/images/teams/bhk-lab.png', link: 'https://bhklab.ca/' },
        { name: 'Pugh Lab', img: '/images/teams/pugh-lab.png', link: 'https://pughlab.org/' },
        { name: 'Cancer Digital Intelligence', img: '/images/teams/CDI.png', link: 'https://pmcdi.ca/' },
        { name: 'Wang Lab', img: '/images/teams/wang-lab.png', link: 'https://wanglab.ai/' }
    ];

    const stakeholders = [
        {
            name: 'Canadian Cancer Clinical Trials Network',
            img: '/images/stakeholders/3CTN.png',
            link: 'https://3ctn.ca/'
        },
        { name: 'Genome Canada', img: '/images/stakeholders/genome-canada.svg', link: 'https://genomecanada.ca/' },
        { name: 'Terry Fox Research Institute', img: '/images/stakeholders/TFRI.png', link: 'https://www.tfri.ca/' }
    ];

    return (
        <div className="py-14 px-10 flex flex-col justify-center items-center" id="team">
            <h1 className="text-5xl text-center font-bold mb-10 text-red-1000 ">Team</h1>
            <div className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap">
                {teams.map(team => (
                    <a href={team.link} target="_blank">
                        <div className="flex flex-col px-10 py-10 md:px-6 md:py-6 shadow-lg gap-8 justify-between items-center border-solid border-1 rounded-lg w-[300px] h-[300px] transition duration-500 hover:scale-110 hover:cursor hover:border-red-1000 hover:shadow-red-1000">
                            <div className="h-48 w-72 px-12 flex flex-col justify-center items-center">
                                <img src={team.img} alt={team.name} className="max-h-full max-w-full shadow-2" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-headingLg font-bold mb-4">{team.name}</h2>
                                <p>"What this lab is contributing"</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <hr className="my-10 w-1/2" />
            <h1 className="text-5xl text-center font-bold mb-10 text-red-1000">Supported By</h1>
            <div
                className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap"
                id="support"
            >
                {stakeholders.map(team => (
                    <a href={team.link} target="_blank">
                        <div className="flex flex-col px-10 py-10 md:px-6 md:py-6 shadow-lg gap-8 justify-between items-center border-solid border-1 rounded-lg w-[300px] h-[300px] transition duration-500 hover:scale-110 hover:cursor hover:border-red-1000 hover:shadow-red-1000">
                            <div className="h-48 w-72 px-12 flex flex-col justify-center items-center">
                                <img src={team.img} alt={team.name} className="max-h-full max-w-full shadow-2" />
                            </div>
                            <h2 className="text-headingMd font-bold h-[56px]">{team.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Team;
