import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import "./ConnectScreen.css";
import './Login.css';
import Switch from './Switch.jsx';

const Login = () => {

    const { t } = useTranslation();

  return (
    <div className="main-screen ">
            <div className="info-box">
                <h2 className="connect-info-header">{t('connect_info_header')}</h2>
                <h4 className="connect-info-second">{t('connect_info_second')}</h4>
            </div>

            <div className="divider"></div>

            <div className="container">
              <div className="nickname-cont">
                <label htmlFor="nickname" className="nickname-cont__label">Твой никнейм на твиче</label>
                <input type="text" id="nickname" placeholder="Username" />
                <label htmlFor="nickname" className="nickname-cont__span">Укажите никнейм</label>
              </div>

              <div className="switch-cont">
                <label className="switch-label">Режим фарма</label>
                <Switch />
              </div>
            </div>
    </div>
  )
}

export default Login;
