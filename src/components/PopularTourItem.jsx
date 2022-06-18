import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PopularTourItem({ tour }) {
    const navigate = useNavigate();
    return (
        <div
            className="mainpage-popular__tour popular-tour"
            onClick={() => {
                navigate('/tours/' + tour.id);
            }}
        >
            <div className="popular-tour__image-container">
                <div className="popular-tour__image">
                    <img src={tour.imageURL} alt="" />
                </div>
            </div>
            <h2 className="popular-tour__title">{tour.title}</h2>
        </div>
    );
}
