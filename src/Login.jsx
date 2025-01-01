import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "./ConnectScreen.css";
import './Login.css';
import Switch from './Switch.jsx';

import arrowBtn from './assets/arrow.svg';

const Login = () => {

    const { t } = useTranslation();

    const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateNickname = () => {
    return nickname.trim() !== '';
  };

  const handleClick = () => {
    if (validateNickname()) {
      setInputColor('#4a9ddb');
      navigate('/access');
      setIsValid(true);
      console.log('correct');
    } else {
      setInputColor('#db4a4a');
      setIsValid(false);
      console.log('incorrect');
    }
  };

  return (
    <div className="main-screen ">
      <div className="info-box">
        <h2 className="connect-info-header">{t('connect_info_header')}</h2>
        <h4 className="connect-info-second">{t('connect_info_second')}</h4>
      </div>

      <div className="divider"></div>

      <div className="container">
        <div className="nickname-cont">
          <label htmlFor="nickname" className="nickname-cont__label" style={{ color: inputColor }}>Твой никнейм на твиче</label>
          <input
            type="text"
            id="nickname"
            placeholder="Username"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ borderColor: inputColor }}
            className={`nickname-cont__input ${isValid ? '' : 'invalid'}`}
          />
          <label htmlFor="nickname" className="nickname-cont__span" style={{ display: isValid ? 'none' : 'block' }}>Укажите никнейм</label>
        </div>

        <div className="switch-cont">
          <label className="switch-label">Режим фарма</label>
          <Switch />
        </div>

        <div className="game-cont">
          <p className="game__text">
            Игра
          </p>
          <button className="game__button">
            Stalcraft
            <span><img src={arrowBtn} alt="arrow" /></span>
          </button>
        </div>

        <button className="complite-button" onClick={handleClick}>
          Продолжить
        </button>
      </div>
    </div>
  );
}

export default Login;
