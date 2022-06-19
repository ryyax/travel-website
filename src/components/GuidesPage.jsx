import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getInitialGuides } from '../asyncFunctions/asyncGuides';
import GuideItem from './GuideItem';
import ToursSearchItem from './ToursSearchItem';

export default function GuidesPage() {
    const [guides, setGuides] = useState([]);
    const [searchResult, setSearchResults] = useState({ query: '', guides: [] });

    useEffect(() => {
        getInitialGuides().then((data) => {
            setGuides(data);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    function searchHandler(value) {
        let newSearchResults = guides.filter((guide) => {
            return guide.name.toLowerCase().includes(value) || guide.city.toLowerCase().includes(value);
        });
        setSearchResults({ query: value, guides: newSearchResults });
    }

    return (
        <div className="guidespage">
            <div className="container guidespage__container">
                <h1 className="guidespage__title">Знайди свого гіда в Україні!</h1>
                <ToursSearchItem onSearch={searchHandler} placeholder={'Шукайте за іменем або назвою міста.'} />
                <div className="guidespage__guides">
                    {searchResult.query !== ''
                        ? searchResult.guides.map((guide) => {
                              return <GuideItem key={guide.id} guide={guide} />;
                          })
                        : guides.map((guide) => {
                              return <GuideItem key={guide.id} guide={guide} />;
                          })}
                </div>
            </div>
        </div>
    );
}
