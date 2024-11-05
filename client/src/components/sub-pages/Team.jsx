import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';

const Team = () => {
    const [visible, setVisible] = useState(false);
    const [org, setOrg] = useState({});
    const teams = [
        {
            name: 'BHK Lab',
            img: '/images/teams/bhk-lab.png',
            link: 'https://bhklab.ca/',
            description:
                'The BHK Lab, headed by Dr. Benjamin Haibe-Kains, develops cutting-edge computational tools and predictive models in an effort to identify new cancer vulnerabilities and improve the way precision oncology is delivered to patients.'
        },
        {
            name: 'Cancer Digital Intelligence',
            img: '/images/teams/CDI.png',
            link: 'https://pmcdi.ca/',
            description:
                'The Cancer Digital Intelligence (CDI) is a research and innovation program within Princess Margaret Cancer Centre, providing a strong foundation in Software Development, Data Science and Analytics while developing the robust data infrastructure to advance novel applications of data science and artificial intelligence methods.'
        },
        {
            name: 'Pugh Lab',
            img: '/images/teams/pugh-lab.png',
            link: 'https://pughlab.org/',
            description:
                'The Pugh Lab, headed by Dr. Trevor Pugh, is focused on the applications of genome sequencing analysis as a routine clinical test and understanding clinical implications of clonal shifts in cancer and non-cancerous cell populations during treatment, most recently using cell-free DNA, immune repertoire, and single cell RNA-seq sequencing.'
        },
        {
            name: 'Wang Lab',
            img: '/images/teams/wang-lab.png',
            link: 'https://wanglab.ai/',
            description:
                'The Wang Lab, headed by Dr. Bo Wang, develops integrative and interpretable machine learning algorithms that can help clinicians with predictive models and decision support to tailor patients’ care to their unique clinical and genomic traits.'
        }
    ];

    const support = [
        {
            name: 'Canadian Cancer Clinical Trials Network',
            img: '/images/support/3CTN.png',
            link: 'https://3ctn.ca/'
        },
        {
            name: 'Genome Canada',
            img: '/images/support/genome-canada.svg',
            link: 'https://genomecanada.ca/'
        },
        {
            name: 'Terry Fox Research Institute',
            img: '/images/support/TFRI.png',
            link: 'https://www.tfri.ca/'
        }
    ];

    const openModal = team => {
        setOrg(team);
        setVisible(true);
    };
    const closeModal = () => {
        setOrg({});
        setVisible(false);
    };

    return (
        <div className="py-14 px-10 flex flex-col justify-center items-center" id="team">
            <h1 className="text-5xl text-center font-bold mb-10 text-red-1000 ">Team</h1>
            <div className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap">
                {teams.map(team => (
                    <button
                        key={team.name}
                        className="flex flex-col px-10 py-10 md:px-6 md:py-6 shadow-lg gap-8 justify-between items-center border-solid border-1 rounded-lg w-[275px] h-[275px] transition duration-500 hover:scale-110 hover:cursor hover:border-red-1000 hover:shadow-red-1000"
                        onClick={() => openModal(team)}
                    >
                        <div className="h-[220px] w-72 px-12 flex flex-col justify-center items-center">
                            <img src={team.img} alt={team.name} className="max-h-full max-w-full shadow-2" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-headingMd font-extrabold mb-2 cursor:pointer">{team.name}</h2>
                        </div>
                    </button>
                ))}
            </div>
            <hr className="my-10 w-1/2" />
            <h1 className="text-5xl text-center font-bold mb-10 text-red-1000" id="support">
                Supported By
            </h1>
            <div className="flex flex-row sm:flex-col gap-8 justify-center items-center text-center flex-wrap">
                {support.map(team => (
                    <a href={team.link} target="_blank" key={team.name}>
                        <div className="flex flex-col px-10 py-10 md:px-6 md:py-6 shadow-lg gap-8 justify-between items-center border-solid border-1 rounded-lg w-[275px] h-[275px] transition duration-500 hover:scale-110 hover:cursor hover:border-red-1000 hover:shadow-red-1000">
                            <div className="h-48 w-72 px-12 flex flex-col justify-center items-center">
                                <img src={team.img} alt={team.name} className="max-h-full max-w-full shadow-2" />
                            </div>
                            <h2 className="text-headingMd font-bold h-[56px]">{team.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
            <Dialog
                header={<img src={org.img} className="w-40" />}
                visible={visible}
                style={{ width: '500px' }}
                onHide={closeModal}
                draggable={false}
            >
                <div className="flex flex-col justify-center items-center mx-1">
                    <p className="text-bodyMd text-black-900 mb-4">{org.description}</p>
                    <a
                        href={org.link}
                        target="_blank"
                        className="text-bodyMd font-bold text-red-1000 transition duration-500 hover:scale-125"
                    >
                        Check us out!
                    </a>
                </div>
            </Dialog>
        </div>
    );
};

export default Team;
