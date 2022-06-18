import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from './List';
import PopularTourItem from './PopularTourItem';
import { getInitialTours } from '../asyncFunctions/asyncTours';

export default function MainPage() {
    let [tours, setTours] = useState([]);

    useEffect(() => {
        getInitialTours().then((data) => {
            setTours(data);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="mainpage">
            <div className="mainpage-header">
                <img
                    src="https://images.wallpaperscraft.com/image/single/mountains_forest_clouds_144711_1920x1080.jpg"
                    alt=""
                    className="bgimage"
                />
                <div className="container mainpage-header__container">
                    <h1 className="mainpage-header__title">Подорожуй. Досліджуй. Насолоджуйся.</h1>
                    <h2 className="mainpage-header__subtitle">
                        Наш сервіс створений для усіх охочих подорожувати Україною та проводити вихідні у нових місцях.
                    </h2>
                </div>
            </div>
            <div className="mainpage-popular">
                <div className="container mainpage-popular__container">
                    <h2 className="mainpage-popular__title">Наші популярні тури</h2>
                    <h3 className="mainpage-popular__subtitle">
                        Наша команда працює щоденно, для того щоб знайти кращі тури для Вас та Вашої родини, щоб Ви
                        могли здійснити незабутню подорож.
                    </h3>
                    <div className="mainpage-popular__tours-container">
                        <List
                            items={tours.slice(0, 6)}
                            renderItem={(tour) => {
                                return <PopularTourItem key={tour.id} tour={tour} />;
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="mainpage-descrition container-fluid">
                <div className="container mainpage-description__container">
                    <img
                        src="https://images.wallpaperscraft.ru/image/single/listia_zelenyj_temnyj_145996_1920x1080.jpg"
                        alt=""
                        className="bgimage"
                    />
                    <h2 className="mainpage-description__title text-shadow">Мандруй</h2>
                    <h3 className="mainpage-description__text text-shadow">
                        Незабутня подорож Україною починається тут!
                    </h3>
                    <div className="mainpage-description__description-bubble-container">
                        <div className="mainpage-description__description-bubble">
                            <h3>Відкривай вражаючі місця</h3>
                        </div>
                        <div className="mainpage-description__description-bubble">
                            <h3>Подорожуй з родиною</h3>
                        </div>
                        <div className="mainpage-description__description-bubble">
                            <h3>Замовляй тур у 1 клік</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
