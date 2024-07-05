import React from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { VirtualScroller } from 'primereact/virtualscroller';

const newsTemplate = (item, index) => {
    console.log(index.index);

    return (
        <Accordion activeIndex={index.index === 0 ? 0 : null}>
            <AccordionTab header={item.date}>
                <div>
                    <h2 className="text-headingXl font-bold text-black-900 mb-4">{item.title}</h2>
                    <p className="text-bodyMd mb-2">{item.text}</p>
                    <p className="text-bodySm text-gray-700">- {item.author}</p>
                </div>
            </AccordionTab>
        </Accordion>
    );
};

const News = () => {
    const news = [
        {
            title: 'Prioritizer Deployment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
            date: 'July 4th, 2024',
            author: 'Paul Brogee'
        },
        {
            title: 'Matcher Update',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            date: 'July 8th, 2024',
            author: 'Paul Brogee'
        },
        {
            title: 'Prioritizer Deployment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
            date: 'July 4th, 2024',
            author: 'Paul Brogee'
        },
        {
            title: 'Matcher Update',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            date: 'July 8th, 2024',
            author: 'Paul Brogee'
        },
        {
            title: 'Prioritizer Deployment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
            date: 'July 4th, 2024',
            author: 'Paul Brogee'
        },
        {
            title: 'Matcher Update',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
            date: 'July 8th, 2024',
            author: 'Paul Brogee'
        }
    ];
    return (
        <div
            className="pt-14 pb-24 px-32 md:px-20 sm:px-4 flex flex-col justify-center items-center rounded-lg"
            id="news"
        >
            <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">News</h1>
            <VirtualScroller
                items={news}
                itemTemplate={newsTemplate}
                itemSize={50}
                className="border-1 rounded-lg"
                style={{ width: '100%', height: '500px' }}
            />
        </div>
    );
};

export default News;
