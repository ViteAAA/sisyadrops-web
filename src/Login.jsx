import React from 'react'
import { useTranslation } from 'react-i18next';
import "./ConnectScreen.css";
import './Login.css';

const Login = () => {

    const { t } = useTranslation();

  return (
    <div className="main-screen">
            <div className="info-box">
                <h2 className="connect-info-header">{t('connect_info_header')}</h2>
                <h4 className="connect-info-second">{t('connect_info_second')}</h4>
            </div>

            <div className="divider"></div>

            <p>Hello</p>
    </div>
  )
}

export default Login
