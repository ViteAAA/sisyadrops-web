import React from 'react';
import { useNavigate } from "react-router-dom";
import './Autorizate.css';

import Copy from './assets/copy.svg';
import Href from './assets/href.svg';

const Autorizate = () => {
    
    const navigate = useNavigate();
    
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }


    // const handleNavigate = (url) => {
    //     navigate(url);
    // };

    return (
        <div className="container-outsider">
            <div className="auth-container">
                <h1 className="auth-title">Авторизация на Твиче</h1>
                <p>Чтобы завершить подключение, скопируйте этот код:</p>
                <button className="code-container" onClick={() => copyText('GPRLPWRM')}>
                    <span className="code">GPRLPWRM</span>
                    <img src={Copy} alt="copy" />
                </button>
                <p>И авторизируйтесь с ним на странице активации твича:</p>
                <button className="code-container" onClick={() => copyText('twich.tv/activate')}>
                    <span className="code">twitch.tv/activate</span>
                    <a href="https://www.twitch.tv/activate"><img src={Href} alt="href" /></a>
                </button>
                <div className="button-container">
                    <button className="help-button">Помощь <div></div></button>
                    <button className="cancel-button">Отмена <div></div></button>
                </div>
            </div>
        </div>
    );
};

export default Autorizate;