import React, { useEffect, useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { VirtualScroller } from 'primereact/virtualscroller';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

const newsTemplate = news => {
    return (
        <Accordion activeIndex={0}>
            {news.map(item => (
                <AccordionTab key={item.id} header={item.date.slice(0, 10)}>
                    <div>
                        <h2 className="text-headingXl font-bold text-black-900 mb-4">{item.title}</h2>
                        <p className="text-bodyMd mb-2">{item.description}</p>
                        <p className="text-bodySm text-gray-700">- {item.author == '' ? 'PMATCH team' : item.author}</p>
                    </div>
                </AccordionTab>
            ))}
        </Accordion>
    );
};

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            try {
                const res = await axios.get('http://localhost:2000/api/news');
                setNews(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)));
            } catch (error) {
                console.log(error);
            }
        };
        getNews();
    }, []);

    return (
        <div
            className="pt-14 pb-24 px-32 md:px-20 sm:px-4 flex flex-col justify-center items-center rounded-lg"
            id="news"
        >
            <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">News</h1>
            {news.length > 0 ? (
                <VirtualScroller
                    items={news}
                    contentTemplate={newsTemplate(news)}
                    itemSize={25}
                    className="border-1 rounded-lg"
                    style={{ width: '100%', height: '400px' }}
                />
            ) : (
                <ProgressSpinner />
            )}
        </div>
    );
};

export default News;
