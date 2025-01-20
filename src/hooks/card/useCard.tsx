import { useContext, useEffect } from 'react';
import { DificultType, ISteps } from '../../store/interfaces/recipes';
import { useGetRecipes } from '../querys/recipes/useQuery';
import { CardContext } from '../../store/context/cards/CardContext';

export const useCard = () => {
    const { setCards, cards } = useContext(CardContext);
    const { isLoading, error, data } = useGetRecipes({
        params: {
            tags: 'vegetarian'
        }
    });

    useEffect(() => {
        if (data) setCards(data);
    }, [isLoading]);

    const getDifficult = (readyInMinutes: number, steps: ISteps[]): DificultType => {
        if (readyInMinutes <= 30 && steps.length <= 3) return DificultType.EASY;
        if (readyInMinutes > 30 && readyInMinutes <= 50 && steps.length > 3 && steps.length <= 5) return DificultType.MEDIUM;
        return DificultType.HARD;
    };

    return {
        cards,
        isLoading,
        error,
        getDifficult
    };
};
