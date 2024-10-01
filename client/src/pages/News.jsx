import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Message } from 'primereact/message';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Accordion, AccordionTab } from 'primereact/accordion';

import axios from 'axios';

const News = () => {
    const [newsItems, setNewsItems] = useState([{ title: '', description: '' }]);
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [passcode, setPasscode] = useState('');

    const toast = useRef(null);

    const submitNews = async () => {
        try {
            const res = await axios.post('http://localhost:2000/api/news', {
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

    const addNewsItem = () => {
        setNewsItems([...newsItems, { title: '', description: '' }]);
    };

    const removeNewsItem = index => {
        const updatedItems = newsItems.filter((_, i) => i !== index);
        setNewsItems(updatedItems);
    };

    const handleTitleChange = (index, value) => {
        const updatedItems = [...newsItems];
        updatedItems[index].title = value;
        setNewsItems(updatedItems);
    };

    const handleDescriptionChange = (index, value) => {
        const updatedItems = [...newsItems];
        updatedItems[index].description = value;
        setNewsItems(updatedItems);
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white px-60 lg:px-24 smd:px-4 pt-12 pb-32">
                <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">News</h1>
                <div className="flex flex-col gap-6 mb-6 px-20 md:px-0 w-full">
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
                                        value={item.title}
                                        onChange={e => handleTitleChange(index, e.target.value)}
                                        className="w-full"
                                    />
                                    {item.title === '' && <Message severity="error" text="Required" />}
                                </div>
                                <p className="text-bodySm m-0 text-gray-500">Enter a title for this news entry</p>
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
                                <p className="text-bodySm m-0 text-gray-500">Enter a description for this news entry</p>
                            </div>
                        </div>
                    ))}

                    <Button
                        className="bg-red-1000 text-white border-0 p-2 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd ml-10"
                        onClick={addNewsItem}
                        icon="pi pi-plus"
                        disabled={newsItems.some(item => item.title === '' || item.description === '')}
                    />

                    <div className="flex flex-col gap-2">
                        <h3 className="m-0 font-bold text-headingLg">Author:</h3>
                        <InputText value={author} onChange={e => setAuthor(e.target.value)} />
                        <p className="text-bodySm m-0 text-gray-500">
                            Enter an author if needed to be specified. If left blank no author will appear in the news
                            entry
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mb-8">
                        <h3 className="m-0 font-bold text-headingLg">Date:</h3>
                        <Calendar value={date} onChange={e => setDate(e.value)} className="w-28 rounded-lg" />
                        <p className="text-bodySm m-0 text-gray-500">
                            Enter a custom date if needed, otherwise today's current date and time will be used.
                        </p>
                    </div>

                    <div className="flex flex-row gap-2 justify-left items-center w-full">
                        <Button
                            className="bg-red-1000 text-white border-0 p-3 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd"
                            onClick={submitNews}
                            disabled={newsItems.some(item => item.title === '' || item.description === '')}
                        >
                            Submit
                        </Button>
                        <InputText
                            placeholder="Submit password"
                            value={passcode}
                            onChange={e => setPasscode(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2 my-10">
                        <h3 className="m-0 font-bold text-headingLg">News Preview:</h3>
                        <Accordion activeIndex={0} className="w-full mt-10">
                            <AccordionTab header={new Date(date).toString().slice(0, 10)} className="w-full">
                                {newsItems.map((item, index) => (
                                    <div key={index} className="w-full mb-6">
                                        <h2 className="text-headingXl font-bold text-black-900 mb-4">{item.title}</h2>
                                        <p className="text-bodyMd mb-2">{item.description}</p>
                                    </div>
                                ))}
                                <p className="text-bodySm text-gray-700">- {author === '' ? 'PMATCH team' : author}</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            </div>
            <Toast ref={toast} />
        </div>
    );
};

export default News;
