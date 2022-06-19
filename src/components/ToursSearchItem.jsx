import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ToursSearchItem({ onSearch, placeholder }) {
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
            placeholder={placeholder}
            value={value}
            onChange={changeHandle}
        />
    );
}
