import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Accaunt.css';
import Modal from './components/modalScreen.jsx';

const Account = () => {

    const navigate = useNavigate();

    const username = 'Username';
    const status = 'Фармит Drops y Streamer';
    const date = '26 ноября в 16:30';

    const [isModalOpen, setModalOpen] = useState(false);

    const hanleClickModal = () => {
        setModalOpen(true);
    }

    const handleConfirm = () => {
        navigate('/');
    };

    const { t } = useTranslation();

    return (
        <div className="account-container">
            <div className="container-outsider">
                <div className="modal-window" style={{ display: isModalOpen ? 'block' : 'none' }}>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        onConfirm={() => handleConfirm()}
                    />
                    <div className="modal-window-background"></div>
                </div>
                <div className="account-section">
                    <h2 className="account-title">{t('account_title')}</h2>
                    <div className="account-info">
                        <div className="avatar"></div>
                        <div className="account-info-text">
                            <span className="username">{username}</span>
                            <p className="status">{status}</p>
                        </div>
                    </div>
                    <p className="connected-time">{date}</p>
                    <a href="https://www.twitch.tv/drops/inventory"><button className="progress-button">{t("account_progress")}</button></a>
                    <button className="disconnect-button" onClick={hanleClickModal}>{t("account_disconnect")}</button>
                </div>
            </div>
            <button className="back-button" onClick={handleConfirm}>{t("account_back_button")}</button>
        </div>
    );
};

export default Account;