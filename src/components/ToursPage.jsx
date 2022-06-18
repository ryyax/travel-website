import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getInitialTours } from '../asyncFunctions/asyncTours';
import TourItem from './TourItem';
import ToursSearchItem from './ToursSearchItem';

export default function ToursPage() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        getInitialTours().then((data) => {
            setTours(data);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="tourspage">
            <div className="container tourspage__container">
                <h2 className="tourspage__title">Обирайте подорож і починайте власну пригоду прямо зараз!</h2>
                <ToursSearchItem />
                <div className="tourspage__tours">
                    {tours.map((tour) => {
                        return <TourItem tour={tour} />;
                    })}
                </div>
            </div>
        </div>
    );
}
