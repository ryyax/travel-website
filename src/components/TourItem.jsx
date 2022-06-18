import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TourItem({ tour }) {
    const navigate = useNavigate();

    return (
        <div className="tour-item">
            <div className="tour-item__image-container">
                <img src={tour.imageURL} alt="" className="tour-item__image bgimage" />
            </div>
            <div className="tour-item__body">
                <h3 className="tour-item__location">{tour.location}</h3>
                <h2
                    className="tour-item__title"
                    onClick={() => {
                        navigate('/tours/' + tour.id);
                    }}
                >
                    {tour.title}
                </h2>
                <div className="tour-item__length">Локації: {tour.sights}</div>
            </div>
        </div>
    );
}
