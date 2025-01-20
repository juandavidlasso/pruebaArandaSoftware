import React from 'react';
import './styles.sass';

interface Props {}

const ProductImage: React.FC<Props> = ({}) => {
    return (
        <div className="product-image">
            <div className="content-image-title">
                <p className="title-image">Recetas</p>
                <p className="subtitle-image">para todos</p>
            </div>
        </div>
    );
};

export default ProductImage;
