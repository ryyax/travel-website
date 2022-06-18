import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificTour } from '../asyncFunctions/asyncTours';

export default function TourItemPage() {
    const [tour, setTour] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getSpecificTour(id).then((data) => {
            setTour(data);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="tourpage">
            <h1 className="tourpage__title">
                Здійсніть незабутню пригоду <br />
                <span>{tour.title}</span>
            </h1>
            <h3 className="tourpage__location">
                У прекрасному місті <span>{tour.location}</span>
            </h3>
            <div className="tourpage__sights">
                Ви зможете відвідати до <span>{tour.sights}</span> цікавих місць!
            </div>
            <div className="tourpage__book-container">
                <button className="tourpage__book-button">Забронювати подорож!</button>
            </div>
            <div className="tourpage__images-container">
                <div className="tourpage__image-container">
                    <img src={tour.imageURL} alt="" className="tourpage__image bgimage" />
                </div>
                <div className="tourpage__image-container">
                    <img src={'https://picsum.photos/id/100/400/250'} alt="" className="tourpage__image bgimage" />
                </div>
                <div className="tourpage__image-container">
                    <img src="https://picsum.photos/id/1022/400/250" alt="" className="tourpage__image bgimage" />
                </div>
            </div>
        </div>
    );
}
