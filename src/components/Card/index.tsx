import React from 'react';
import './styles.sass';
import { IRecipe } from '../../store/interfaces/recipes';
import { useCard } from '../../hooks/card/useCard';

interface Props {
    card: IRecipe;
}

const Card: React.FC<Props> = ({ card }) => {
    const { getDifficult } = useCard();
    const name = card.title.split(' ');

    return (
        <div className="card">
            <div className="card-image">
                <img src={card.image} alt={card.title} />
            </div>
            <div className="card-content">
                <div className="content-default">
                    <div className="card-title">
                        <p className="title">{name[0]}</p>
                        <p className="subtitle">{name[1]}</p>
                    </div>
                    <div className="card-footer">
                        <div className="footer-score">
                            <img src="/assets/icons/ic_star.svg" alt="star" />
                            <p>{card.healthScore.toFixed(1)}</p>
                        </div>
                        <div className="footer-icon">
                            <img src="/assets/icons/ic_heart.svg" alt="heart" />
                        </div>
                    </div>
                </div>
                <div className="content-hover">
                    <div className="content-hover-1">
                        <img src="/assets/icons/ic_dinner.png" alt="dinner" />
                        <p className="content-hover-1-title">Tamaño de la porción</p>
                        <p className="content-hover-1-subtitle">{card.servings} raciones</p>
                    </div>
                    <div className="content-hover-2">
                        <img src="/assets/icons/ic_time.png" alt="time" />
                        <p className="content-hover-2-title">Tiempo de preparación</p>
                        <p className="content-hover-2-subtitle">{card.readyInMinutes} minutos</p>
                    </div>
                    <div className="content-hover-3">
                        <img src="/assets/icons/ic_chef.png" alt="chef" />
                        <p className="content-hover-3-title">Dificultad</p>
                        <p className="content-hover-3-subtitle">
                            {getDifficult(card.readyInMinutes, card.analyzedInstructions[0].steps)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
