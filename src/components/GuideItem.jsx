import React from 'react';

export default function GuideItem({ guide }) {
    return (
        <div className="guide-item">
            <div className="guide-item__rating">Рейтинг: {guide.rating}</div>
            <h2 className="guide-item__name">{guide.name}</h2>
            <div className="guide-item__city">{guide.city}</div>
            <div className="guide-item__about">
                <div>Я вам покажу</div>
                {guide.about}
            </div>
        </div>
    );
}
