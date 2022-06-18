import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getInitialTours } from '../asyncFunctions/asyncTours';
import TourItem from './TourItem';
import ToursSearchItem from './ToursSearchItem';

export default function ToursPage() {
    const [tours, setTours] = useState([]);
    const [searchResult, setSearchResults] = useState({ query: '', tours: [] });

    useEffect(() => {
        getInitialTours().then((data) => {
            setTours(data);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    function searchHandler(value) {
        let newSearchResults = tours.filter((tour) => {
            return tour.title.toLowerCase().includes(value) || tour.location.toLowerCase().includes(value);
        });
        setSearchResults({ query: value, tours: newSearchResults });
    }

    return (
        <div className="tourspage">
            <div className="container tourspage__container">
                <h2 className="tourspage__title">Обирайте подорож і починайте власну пригоду прямо зараз!</h2>
                <ToursSearchItem onSearch={searchHandler} />
                <div className="tourspage__tours">
                    {searchResult.query != ''
                        ? searchResult.tours.map((tour) => {
                              return <TourItem key={tour.id} tour={tour} />;
                          })
                        : tours.map((tour) => {
                              return <TourItem key={tour.id} tour={tour} />;
                          })}
                </div>
            </div>
        </div>
    );
}
