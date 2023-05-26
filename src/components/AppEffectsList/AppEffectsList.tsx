import React, {useState} from 'react';
import './AppEffectsList.scss'

const text = 'текст должен исчесзуть при наведении текст должен исчесзуть при наведении текст должен исчесзуть при наведении текст должен исчесзуть при наведении текст должен исчесзуть при наведении текст должен исчесзуть при наведениитекст должен исчесзуть при наведении текст должен исчесзуть при наведении'

export const AppEffectsList = () => {
    const [disappearingIndex, setDisappearingIndex] = useState<{ [key: number]: boolean }>({})

    const onMouseHandler = (index: number) => {
        if (!disappearingIndex[index]) {
            setDisappearingIndex(prevState => ({...prevState, [index]: true}))
        }
    }
    return (
        <div className='effects-list'>
            <div className="effects-list__item disappearing-text">
                {text.split('').map((letter, index) => {
                    return <span
                        key={`let${index}`}
                        className={`${disappearingIndex[index] ? 'active' : ''}`}
                        onMouseEnter={() => onMouseHandler(index)}
                        onMouseLeave={() => onMouseHandler(index)}
                    >{letter}</span>
                })}
            </div>
            <div className="effects-list__item">item</div>
            <div className="effects-list__item">item</div>
        </div>
    );
};