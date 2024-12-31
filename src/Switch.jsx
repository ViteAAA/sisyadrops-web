import React, { useState } from 'react';
import './Switch.css';

import twitchDrops from './assets/drops.svg';
import channelPoints from './assets/points.svg';

const Switch = () => {

    
    const [isDrops, setIsDrops] = useState(true);

    const toggleSwitch = () => {
        setIsDrops(!isDrops);
    };

    return (
        <div className="switch" onClick={toggleSwitch}>
            <div className={`indicator ${isDrops ? 'left' : 'right'}`}></div>
            <div className={`option ${isDrops ? 'active' : ''}`}>
                <img src={twitchDrops} alt="drops" className="switch__drops" />
                <p className="switch__text">Твич Drops</p>
            </div>
            <div className={`option ${!isDrops ? 'active' : ''}`}>
                <img src={channelPoints} alt="points" className="switch__points" />
                <p className="switch__text">Баллы канала</p>
            </div>
        </div>
    );
};

export default Switch;