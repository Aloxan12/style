import React from 'react';
import './AppEmployees.scss'
export const AppEmployees = () => {
    return (
        <div className='employee'>
            <div className="employee__item">
                <div className="employee-block">
                    <div className='employee-block__item name'>
                        <div>name 1</div>
                    </div>
                    <div className='employee-block__item name'>
                        <div>name 1</div>
                    </div>
                    <div className='employee-block__item'>photo</div>
                    <div className='employee-block__item'>email</div>
                </div>
            </div>
            <div className="employee__item">employee</div>
            <div className="employee__item">employee</div>
        </div>
    );
}