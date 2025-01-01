import React from 'react';
import Case from './components/Case.jsx'
import './Access.css';

const Access = () => {
    const stylesWhithRec = {
        container: { backgroundColor: 'linear-gradient(135deg, #03b3ff 0%, #5a31ff 100%)' },
        recommendation: { display: 'block' },
    };
    const stylesWhithoutRec = {
        container: { backgroundColor: 'linear-gradient(135deg, #03b3ff 0%, #5a31ff 100%)' },
        recommendation: { display: 'none' },
    };

    return (
        <div className="container">
            <h1 className="access__title">
                Приобрести доступ
            </h1>
            <Case
                title="Classic"
                items={['1 аккаунт', 'Фарм Drops для любых игр']}
                buttonText="Получить доступ"
                price="170"
                postScriptum="-50% если купить на год"
                customStyles={stylesWhithoutRec}
            />
        </div>
    );
}

export default Access;