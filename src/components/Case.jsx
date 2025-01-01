import React from 'react';
import './Case.css';

const Case = ({ title, items, buttonText, customStyles, price, postScriptum }) => {
    return (
        <div className="case" >
            <div className="case-container" >
                <h1 className="case-title">{title}</h1>
                <ul className="case-list">
                    {items.map((item, index) => (
                        <li key={index} className="case-list-item">
                            <span className="checkmark">✔</span> {item}
                        </li>
                    ))}
                </ul>
                <h2 className="case-price">{price}₽/мес</h2>
                <p className="case-ps">{postScriptum}</p>
                <button className="case-button">
                    {buttonText}
                    <div className="case-button-background"></div>
                </button>
                
            </div>
            <div className="case-background" style={customStyles.container}></div>
        </div>
    );
};

export default Case;