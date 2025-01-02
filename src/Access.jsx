import React from 'react';
import Case from './components/Case.jsx'
import { useTranslation } from 'react-i18next';
import './Access.css';

import Star from './assets/star.svg';
import Video from './assets/video.svg';

const Access = () => {
    
    const border = {
        outside: {
            padding: '0',
        },
        inside: {
            padding: '22px 20px 19px 19px'
        }
    }

    const { t } = useTranslation();
    

    return (
        <div className="container-outsider">
            <div className="container">
            <h1 className="access__title">
                {t('access_title')}
            </h1>
                <div className="access-cases-container">
                    <Case
                        title={t('classic_title')}
                        items={t('classic_items', { returnObjects: true })}
                        buttonText={t('classic_button_text')}
                        price={t('classic_price')}
                        postScriptum={t('classic_post_scriptum')}
                        background="linear-gradient(135deg, #03b3ff 0%, #5a31ff 100%)"
                        opacity="0.09"
                        transport="/autorizate"
                    />
                    <Case
                        title={t('gold_title')}
                        items={t('gold_items', { returnObjects: true })}
                        buttonText={t('gold_button_text')}
                        price={t('gold_price')}
                        postScriptum={t('gold_post_scriptum')}
                        background="linear-gradient(135deg, #ffb016 0%, #fe0098 100%)"
                        displayUs="block"
                        discount="flex"
                        opacity="0.08"
                    />
                    <Case
                        title={t('elite_title')}
                        items={t('elite_items', { returnObjects: true })}
                        buttonText={t('elite_button_text')}
                        price={t('elite_price')}
                        postScriptum={t('elite_post_scriptum')}
                        background="linear-gradient(145deg, rgba(38, 255, 151, 0.08) 0%, rgba(49, 131, 255, 0.08) 100%)"
                        border={border}
                    />
                    <Case
                        title={t('startup_title')}
                        items={t('startup_items', { returnObjects: true })}
                        buttonText={t('startup_button_text')}
                        price={t('startup_price')}
                        postScriptum={t('startup_post_scriptum')}
                        background="linear-gradient(145deg, rgba(255, 11, 11, 0.08) 0%, rgba(96, 8, 50, 0.08) 100%)"
                        border={border}
                    />
                    <Case
                        title={t('business_title')}
                        items={t('business_items', { returnObjects: true })}
                        buttonText={t('business_button_text')}
                        price={t('business_price')}
                        postScriptum={t('business_post_scriptum')}
                        background="linear-gradient(145deg, rgba(237, 36, 255, 0.08) 0%, rgba(74, 5, 221, 0.08) 100%)"
                        border={border}
                        displaySel="block"
                    />
                    <Case
                        title={t('factory_title')}
                        items={t('factory_items', { returnObjects: true })}
                        buttonText={t('factory_button_text')}
                        price={t('factory_price')}
                        postScriptum={t('factory_post_scriptum')}
                        background="linear-gradient(145deg, rgba(0, 61, 219, 0.08) 0%, rgba(36, 176, 255, 0.08) 100%)"
                        border={border}
                    />
                    <Case
                        title={t('infinity_title')}
                        items={t('infinity_items', { returnObjects: true })}
                        buttonText={t('infinity_button_text')}
                        price={t('infinity_price')}
                        postScriptum={t('infinity_post_scriptum')}
                        background="linear-gradient(145deg, rgba(255, 91, 219, 0.08) 0%, rgba(91, 65, 255, 0.08) 100%)"
                        border={border}
                        last={true}
                    />
                </div>
            </div>
            <button className="access-reviews"><img src={Star} alt="Star" /> {t('access_reviews')} <div></div></button>
            <button className="access-help"><img src={Video} alt="Video" /> {t('access_help')} <div></div></button>
        </div>
    );
}

export default Access;