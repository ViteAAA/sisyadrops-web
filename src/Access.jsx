import React from 'react';
import Case from './components/Case.jsx'
import './Access.css';

import Star from './assets/star.svg';
import Video from './assets/video.svg';

const Access = () => {
    
    const border = {
        outside: {
            padding: '0',
        },
        inside: {
            padding: '22px 20px 19px 19px'
        }
    }
    

    return (
        <div className="container">
            <h1 className="access__title">
                Приобрести доступ
            </h1>
            <div className="access-cases-container">
                <Case
                    title="Classic"
                    items={['1 аккаунт', 'Фарм Drops для любых игр']}
                    buttonText="Получить доступ"
                    price="170"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(135deg, #03b3ff 0%, #5a31ff 100%)"
                    opacity="0.09"
                />
                <Case 
                    title="Gold"
                    items={['3 аккаунта', 'Фарм Drops для любых игр', 'Фарм балов канала у любых стримеров']}
                    buttonText="Выбрать этот уровень"
                    price="230"
                    postScriptum="Скидка 20% действует до 28 августа"
                    background="linear-gradient(135deg, #ffb016 0%, #fe0098 100%)"
                    displayUs="block"
                    discount="flex"
                    opacity="0.08"
                />
                <Case
                    title="Elite"
                    items={['25 аккаунтов', 'Фарм Drops для любых игр', 'Фарм балов канала у любых стримеров']}
                    buttonText="Выбрать этот уровень"
                    price="490"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(145deg, rgba(38, 255, 151, 0.08) 0%, rgba(49, 131, 255, 0.08) 100%)"
                    border={border}
                />
                <Case
                    title="Startup"
                    items={['100 аккаунтов', 'Фарм Drops для любых игр', 'Мульти-подключение кластерами по 100 аккаунтов']}
                    buttonText="Выбрать этот уровень"
                    price="1090"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(145deg, rgba(255, 11, 11, 0.08) 0%, rgba(96, 8, 50, 0.08) 100%)"
                    border={border}
                />
                <Case
                    title="Business"
                    items={['500 аккаунтов', 'Фарм Drops для любых игр', 'Мульти-подключение кластерами по 250 аккаунтов']}
                    buttonText="Выбрать этот уровень"
                    price="3800"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(145deg, rgba(237, 36, 255, 0.08) 0%, rgba(74, 5, 221, 0.08) 100%)"
                    border={border}
                />
                <Case
                    title="Factory"
                    items={['1 000 аккаунтов', 'Фарм Drops для любых игр', 'Мульти-подключение кластерами по 500 аккаунтов']}
                    buttonText="Выбрать этот уровень"
                    price="5800"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(145deg, rgba(0, 61, 219, 0.08) 0%, rgba(36, 176, 255, 0.08) 100%)"
                    border={border}
                />
                <Case
                    title="Infinity"
                    items={['5 000 аккаунтов', 'Фарм Drops для любых игр', 'Мульти-подключение кластерами по 1000 аккаунтов']}
                    buttonText="Выбрать этот уровень"
                    price="9600"
                    postScriptum="-50% если купить на год"
                    background="linear-gradient(145deg, rgba(255, 91, 219, 0.08) 0%, rgba(91, 65, 255, 0.08) 100%)"
                    border={border}
                    last={true}
                />
            </div>
            <button className="access-reviews"><img src={Star} alt="Star" /> Отзывы <div></div></button>
            <button className="access-help"><img src={Video} alt="Video" /> Помощь с выбором <div></div></button>
        </div>
    );
}

export default Access;