import React from 'react';
import { useTranslation } from 'react-i18next';
import './Accaunt.css';

const Account = () => {

    const username = 'Username';
    const status = 'Фармит Drops y Streamer';
    const date = '26 ноября в 16:30';

    const { t } = useTranslation();

    return (
        <div className="container-outsider">
            <div className="account-section">
                <h2 className="account__title">{t('account_title')}</h2>
                <div className="account-info">
                    <div className="avatar"></div>
                    <div className="account-info-text">
                        <span className="username">{username}</span>
                        <p className="status">{status}</p>
                    </div>
                </div>
                <p className="connected-time">{date}</p>
                <button className="progress-button">{t("account_progress")}</button>
                <button className="disconnect-button">{t("account_disconnect")}</button>
                <button className="back-button">{t("account_back_button")}</button>
            </div>
        </div>
    );
};

export default Account;