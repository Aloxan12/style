import React from 'react';
import './AppToggle.scss'

export const AppToggle = () => {
    return (
        <div>
            <input type="checkbox" id={'checker'}/>
            <label htmlFor="checker" />
        </div>
    );
}