import React, { useState, useRef, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Message } from 'primereact/message';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Accordion, AccordionTab } from 'primereact/accordion';

import axios from 'axios';

const News = () => {
    // Sate variables for creating news
    const [newsItems, setNewsItems] = useState([{ subtitle: '', description: '' }]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [passcode, setPasscode] = useState('');

    // State variables for deleting news
    const [news, setNews] = useState([]);
    const [id, setId] = useState('');

    const toast = useRef(null);

    const submitNews = async () => {
        try {
            const res = await axios.post('/api/news/add', {
                title,
                newsItems,
                author,
                date,
                passcode
            });
            toast.current.show({
                severity: res.status != 200 ? 'error' : 'success',
                summary: `Status code: ${res.status}`,
                detail: res.data,
                sticky: true
            });
        } catch (error) {
            toast.current.show({
                severity: error.response.status != 200 ? 'error' : 'success',
                summary: `Status code: ${error.response.status}`,
                detail: error.response.data,
                sticky: true
            });
        }
    };

    const deleteNews = async () => {
        try {
            const res = await axios.post('/api/news/delete', {
                id,
                passcode
            });
            toast.current.show({
                severity: res.status != 200 ? 'error' : 'success',
                summary: `Status code: ${res.status}`,
                detail: res.data,
                sticky: true
            });
        } catch (error) {
            toast.current.show({
                severity: error.response.status != 200 ? 'error' : 'success',
                summary: `Status code: ${error.response.status}`,
                detail: error.response.data,
                sticky: true
            });
        }
    };

    const addNewsItem = () => {
        setNewsItems([...newsItems, { subtitle: '', description: '' }]);
    };

    const removeNewsItem = index => {
        const updatedItems = newsItems.filter((_, i) => i !== index);
        setNewsItems(updatedItems);
    };

    const handleSubtitleChange = (index, value) => {
        const updatedItems = [...newsItems];
        updatedItems[index].subtitle = value;
        setNewsItems(updatedItems);
    };

    const handleDescriptionChange = (index, value) => {
        const updatedItems = [...newsItems];
        updatedItems[index].description = value;
        setNewsItems(updatedItems);
    };

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
        <div>
            <div className="flex flex-col items-center justify-center bg-white px-60 lg:px-24 smd:px-4 pt-12 pb-32">
                <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">Adding News</h1>
                <div className="flex flex-col gap-6 mb-6 px-20 md:px-0 w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="m-0 font-bold text-headingLg">Title:</h3>
                        <InputText value={title} onChange={e => setTitle(e.target.value)} />
                        <p className="text-bodySm m-0 text-gray-500">Enter a title for the news entry.</p>
                    </div>
                    <h3 className="m-0 font-bold text-headingLg">Description:</h3>
                    {newsItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2 px-10">
                                <div className="flex flex-row gap-4 items-center">
                                    <h3 className="m-0 font-bold text-headingMd">Heading {index + 1}:</h3>
                                    {index > 0 && (
                                        <Button
                                            icon="pi pi-minus"
                                            className="bg-red-1000 text-white border-0 p-2 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd"
                                            onClick={() => removeNewsItem(index)}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-row items-center gap-2 w-full">
                                    <InputText
                                        value={item.subtitle}
                                        onChange={e => handleSubtitleChange(index, e.target.value)}
                                        className="w-full"
                                    />
                                    {item.subtitle === '' && <Message severity="error" text="Required" />}
                                </div>
                                <p className="text-bodySm m-0 text-gray-500">Enter a heading for this news entry</p>
                            </div>
                            <div className="flex flex-col gap-2 px-10">
                                <h3 className="m-0 font-bold text-headingMd">Content {index + 1}:</h3>
                                <div className="flex flex-row items-center gap-2 w-full">
                                    <InputTextarea
                                        value={item.description}
                                        onChange={e => handleDescriptionChange(index, e.target.value)}
                                        className="w-full"
                                    />
                                    {item.description === '' && <Message severity="error" text="Required" />}
                                </div>
                                <p className="text-bodySm m-0 text-gray-500">Enter a content for the above heading</p>
                            </div>
                        </div>
                    ))}

                    <Button
                        className="bg-red-1000 text-white border-0 p-2 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd ml-10"
                        onClick={addNewsItem}
                        icon="pi pi-plus"
                        disabled={newsItems.some(item => item.subtitle === '' || item.description === '')}
                    />

                    <div className="flex flex-col gap-2">
                        <h3 className="m-0 font-bold text-headingLg">Author:</h3>
                        <InputText value={author} onChange={e => setAuthor(e.target.value)} />
                        <p className="text-bodySm m-0 text-gray-500">
                            Enter an author if needed to be specified. If left blank "PMATCH team" will appear in the
                            news entry
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mb-8">
                        <h3 className="m-0 font-bold text-headingLg">Date:</h3>
                        <Calendar value={date} onChange={e => setDate(e.value)} className="w-28 rounded-lg" />
                        <p className="text-bodySm m-0 text-gray-500">
                            Enter a custom date if needed, otherwise select today's date.
                        </p>
                    </div>

                    <div className="flex flex-col justify-left w-full gap-2">
                        <div className="flex flex-row gap-2 justify-left items-center w-full">
                            <Button
                                className="bg-red-1000 text-white border-0 p-3 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd"
                                onClick={submitNews}
                                disabled={newsItems.some(item => item.subtitle === '' || item.description === '')}
                            >
                                Submit
                            </Button>
                            <InputText
                                placeholder="Submission password"
                                value={passcode}
                                onChange={e => setPasscode(e.target.value)}
                            />
                        </div>
                        <p className="text-bodySm m-0 text-gray-500">
                            When you're ready to submit the drafted news entry enter your submission password and then
                            press the submit button
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 my-10">
                        <h3 className="m-0 font-bold text-headingLg">News Preview:</h3>
                        <Accordion activeIndex={0} className="w-full mt-10">
                            <AccordionTab header={new Date(date).toString().slice(0, 15)} className="w-full">
                                <h1 className="text-headingXl font-bold text-black-900 mb-6 text-red-1000">{title}</h1>
                                {newsItems.map((content, index) => (
                                    <div key={index} className="w-full mb-6">
                                        <h2 className="text-headingMd font-bold text-black-900 mb-4">
                                            {content.subtitle}
                                        </h2>
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
                                <p className="text-bodySm text-gray-700">- {author === '' ? 'PMATCH team' : author}</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>

                <h1 className="text-red-1000 text-5xl font-bold mb-32 mt-60 text-center">Deleting News</h1>
                <div className="flex flex-col gap-6 w-full">
                    <Accordion activeIndex={0} className="mb-24">
                        {news.map(item => (
                            <AccordionTab key={item.id} header={item.date.slice(0, 10)}>
                                <h1 className="text-heading2Xl font-bold text-black-900 mb-6 text-red-1000 ">
                                    {item.title}
                                </h1>
                                {item.newsItems.map((content, index) => (
                                    <div key={index} className="w-full mb-6">
                                        <h2 className="text-headingMd font-bold text-black-900 mb-4">
                                            {content.subtitle}
                                        </h2>
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
                                <p className="text-bodySm text-gray-700 mb-8">
                                    - {item.author === '' ? 'PMATCH team' : item.author}
                                </p>
                                <p className="text-bodySm">
                                    ID: <span className="text-red-600">{item._id}</span>
                                </p>
                            </AccordionTab>
                        ))}
                    </Accordion>
                    <div className="flex flex-col gap-2 justify-left items-left">
                        <h3 className="m-0 font-bold text-headingLg">ID:</h3>

                        <InputText
                            placeholder="ID. Ex. 66fc2d84ee9b61f1bb291584"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                        <p className="text-bodySm m-0 text-gray-500">
                            Enter the ID of the news entry you want to delete. Each ID is found in bright red at the
                            bottom of each news item
                        </p>
                    </div>
                    <div className="flex flex-col justify-left w-full gap-2">
                        <div className="flex flex-row gap-2 justify-left items-center w-full">
                            <Button
                                className="bg-red-1000 text-white border-0 p-3 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd"
                                onClick={deleteNews}
                                disabled={id === ''}
                            >
                                Delete
                            </Button>
                            <InputText
                                placeholder="Deletion password"
                                value={passcode}
                                onChange={e => setPasscode(e.target.value)}
                            />
                        </div>
                        <p className="text-bodySm m-0 text-gray-500">
                            When you're ready to delete a news item enter your deletion password and then press the
                            delete button
                        </p>
                    </div>
                </div>
            </div>
            <Toast ref={toast} />
        </div>
    );
};

export default News;
