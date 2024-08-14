import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { FloatLabel } from 'primereact/floatlabel';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';

const News = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [passcode, setPasscode] = useState('');

    const submitNews = async () => {
        try {
            const res = await axios.post('http://localhost:2000/api/news', {
                title,
                description,
                author,
                date,
                passcode
            });
            console.log(res);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white px-60 lg:px-24 smd:px-4 pt-120 pb-32">
                <h1 className="text-red-1000 text-5xl font-bold mb-14 text-center">News</h1>
                <div className="flex flex-col gap-6 mb-6 px-20 md:px-0 w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="m-0 font-bold text-headingLg">Title:</h3>
                        <InputText value={title} onChange={e => setTitle(e.target.value)} />
                        <p className="text-bodySm m-0 text-gray-500">Enter a title for this news entry</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="m-0 font-bold text-headingLg">Description:</h3>
                        <InputTextarea value={description} onChange={e => setDescription(e.target.value)} />
                        <p className="text-bodySm m-0 text-gray-500" id="username-help">
                            Enter a description for this news entry
                        </p>
                    </div>
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
                        <button
                            className="bg-red-1000 text-white border-0 p-3 rounded-lg hover:bg-red-700 cursor-pointer text-headingMd"
                            onClick={() => submitNews()}
                        >
                            Submit
                        </button>
                        <InputText
                            placeholder="Submit password"
                            value={passcode}
                            onChange={e => setPasscode(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
