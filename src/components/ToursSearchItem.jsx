import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ToursSearchItem({ onSearch }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        onSearch(value.toLowerCase());
    }, [value]);

    function changeHandle(event) {
        setValue(event.target.value);
    }

    return (
        <input
            type="search"
            className="light tours__search-item"
            placeholder="Шукайте за назвою міста, або подорожі."
            value={value}
            onChange={changeHandle}
        />
    );
}
