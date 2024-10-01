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
                    <h1 className="text-heading2Xl font-bold text-black-900 mb-6 text-red-1000 ">{item.title}</h1>
                    {item.newsItems.map((content, index) => (
                        <div key={index} className="w-full mb-6">
                            <h2 className="text-headingMd font-bold text-black-900 mb-4">{content.subtitle}</h2>
                            {content.description.split(/\r?\n/).map(
                                (line, i) =>
                                    line === '' ? (
                                        <br key={i} /> // Render empty lines as <br /> tags to preserve the exact number of empty lines
                                    ) : (
                                        <p key={i} className="text-bodyMd mb-2">
                                            {line}
                                        </p>
                                    ) // Render non-empty lines as paragraphs
                            )}
                        </div>
                    ))}
                    <p className="text-bodySm text-gray-700">- {item.author === '' ? 'PMATCH team' : item.author}</p>
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
                const res = await axios.get('/api/news');
                console.log(res);
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
                    style={{ width: '100%', height: '800px' }}
                />
            ) : (
                <ProgressSpinner />
            )}
        </div>
    );
};

export default News;
