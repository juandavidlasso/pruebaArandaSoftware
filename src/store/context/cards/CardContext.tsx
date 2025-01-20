/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactNode, useState } from 'react';
import { IRecipe } from '../../interfaces/recipes';

interface CardState {
    cards: IRecipe[];
    setCards: React.Dispatch<React.SetStateAction<IRecipe[]>>;
}

export const CardContext = createContext<CardState>({
    cards: [],
    setCards: () => []
});

export const CardProvider = ({ children }: { children: ReactNode }) => {
    const [cards, setCards] = useState<IRecipe[]>([]);

    return (
        <CardContext.Provider
            value={{
                cards,
                setCards
            }}
        >
            {children}
        </CardContext.Provider>
    );
};
