import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './Autorizate.css';

import Copy from './assets/copy.svg';
import Href from './assets/href.svg';

const Autorizate = () => {
    
    const navigate = useNavigate();

    const clikcButtonCancel = () => {
        navigate('/');
    }

    const clickButtonHelp = () => {
        navigate('/support', { state: "3" });
    }
    
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    }

    const { t } = useTranslation();


    return (
        <div className="container-outsider">
            <div className="auth-box">
                <div className="auth-justify">
                    <div className="auth-container">
                        <h1 className="auth-title">{t("twitch_auth")}</h1>
                        <p>{t("auth_connect")}</p>
                        <button className="code-container" onClick={() => copyText('GPRLPWRM')}>
                            <span className="code">{t("auth_code")}</span>
                            <img src={Copy} alt="copy" />
                        </button>
                        <p>{t("auth_text")}</p>
                        <button className="code-container" onClick={() => copyText('twich.tv/activate')}>
                            <span className="code">{t("auth_href")}</span>
                            <a className="code-container-href" href="https://www.twitch.tv/activate"><img src={Href} alt="href" /></a>
                        </button>
                    </div>
                </div>
                <div className="button-container">
                    <button className="help-button" onClick={clickButtonHelp}>{t("help_button")}<div></div></button>
                    <button className="cancel-button" onClick={clikcButtonCancel}>{t("cancel_button")}<div></div></button>
                </div>
            </div>
        </div>
    );
};

export default Autorizate;