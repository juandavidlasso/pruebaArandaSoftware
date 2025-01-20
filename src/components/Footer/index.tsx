import React from 'react';
import './styles.sass';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="content-title">
                    <p>Con el Patrocinio de</p>
                </div>
                <div className="content-image">
                    <img src="/assets/images/products.png" alt="footer-image" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
