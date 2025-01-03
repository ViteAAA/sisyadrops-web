import React from 'react';
import { useTranslation } from 'react-i18next';
import './ModalScreen.css';

const ModalScreen = ({ isOpen, onClose, onConfirm }) => {

    const { t } = useTranslation();

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-inside">
                <h2>{t('modal_title')}</h2>
                    <p>{t('modal_text')}</p>
                    <div className="modal-button-container">
                        <button className="modal-cancel-button" onClick={onClose}>{t('modal_cancel_button')}</button>
                        <button className="modal-confirm-button" onClick={onConfirm}>{t('modal_confirm_button')}</button>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default ModalScreen;