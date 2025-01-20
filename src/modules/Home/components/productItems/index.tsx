import React from 'react';
import './styles.sass';

interface Props {}

const ProductItems: React.FC<Props> = ({}) => {
    return (
        <div className="product-items">
            <div className="content-items">
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_vegetarianos.svg" alt="vegetarianos" />
                    </div>
                    <div className="item-title">
                        <p>Vegetarianos</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_principales.svg" alt="principales" />
                    </div>
                    <div className="item-title">
                        <p>Principales</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_tortas.svg" alt="tortas" />
                    </div>
                    <div className="item-title">
                        <p>Tortas</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_rapida.svg" alt="rapida" />
                    </div>
                    <div className="item-title">
                        <p>Rápida</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_menu_ninos.svg" alt="infantil" />
                    </div>
                    <div className="item-title">
                        <p>Menú Niños</p>
                    </div>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="/assets/icons/ic_sopas.svg" alt="sopas" />
                    </div>
                    <div className="item-title">
                        <p>Sopas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItems;
