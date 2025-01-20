import React from 'react';
import Card from '../../../../components/Card';
import './styles.sass';
import { useCard } from '../../../../hooks/card/useCard';
import { useAlert } from '../../../../hooks/alert/useAlert';
import Loading from '../../../../components/Loading';

interface Props {}

const ProductCards: React.FC<Props> = ({}) => {
    const { isLoading, error, cards } = useCard();
    const { showAlert } = useAlert();

    if (error) return showAlert(error?.message ?? '', 'error');
    if (isLoading) return <Loading />;

    return (
        <div className="product-cards">
            <div className="product-cards-title">
                <div className="cards-title">
                    <p className="title-cards">Nuevas Recetas</p>
                </div>
                <div className="cards-menu">
                    {cards?.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
