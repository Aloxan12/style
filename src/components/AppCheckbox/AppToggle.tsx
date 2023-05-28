import React from 'react';
import './AppToggle.scss'

export const AppToggle = () => {
    return (
        <div className='toggle-wrap'>
            <input type="checkbox" id={'checker'} className='input-toggle'/>
            <label htmlFor="checker" className='label-toggle' />
        </div>
    );
}