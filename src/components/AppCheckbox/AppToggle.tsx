import React from 'react';
import './AppToggle.scss'

export const AppToggle = () => {
    return (
        <div>
            <input type="checkbox" id={'checker'} className='input-toggle'/>
            <label htmlFor="checker" className='label-toggle' />
        </div>
    );
}