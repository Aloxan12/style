import React from 'react';
import './AppCheckbox.scss'

export const AppCheckbox = () => {
    return (
        <div>
            <input type="checkbox" id={'checker'}/>
            <label htmlFor="checker" />
        </div>
    );
}