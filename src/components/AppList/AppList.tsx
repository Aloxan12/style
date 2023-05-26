import React from 'react';
import './AppList.scss'
import {AppToggle} from "../AppCheckbox/AppToggle";
export const AppList = () => {
    return (
        <div className='list'>
            <div className="list__item">
                <AppToggle />
            </div>
            <div className="list__item">item</div>
            <div className="list__item">item</div>
            <div className="list__item">item</div>
            <div className="list__item">item</div>
            <div className="list__item">item</div>
        </div>
    );
};