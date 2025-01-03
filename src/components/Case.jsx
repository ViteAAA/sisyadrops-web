import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case.css';
import Mark from '../assets/mark.svg';

const Case = ({ title, items, buttonText, displayUs, displaySel, price, postScriptum, background, opacity, last = false, discount, transport, border = {} }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(transport);
    }
    return (
        <div className="case" style={{ ...border.outside, marginBottom: last ? '0' : '37px' }}>
            <div className="case-container" style={border.inside}>
                <h1 className="case-title">{title}</h1>
                <ul className="case-list">
                    {items.map((item, index) => (
                        <li key={index} className="case-list-item">
                            <span className="checkmark"><img src={Mark} alt="mark" /></span> {item}
                        </li>
                    ))}
                </ul>
                <h2 className="case-price">{price}₽/мес <span style={{ display: discount }}><div className="case-price-container"><div></div><p>290₽</p></div><div className="case-price-discount">-20%</div></span></h2>
                <p className="case-ps">{postScriptum}</p>
                <button className="case-button" onClick={onClick}>
                    {buttonText}
                    <div className="case-button-background"></div>
                </button>
                <div className="case-userChoose" style={{ display: displayUs }}>Выбор пользователей</div>
                <div className="case-selling" style={{ display: displaySel }}>Продавай аккаунты</div>
            </div>
            <div className="case-background" style={{ background: background, opacity: opacity }}></div>
        </div>
    );
};

export default Case;