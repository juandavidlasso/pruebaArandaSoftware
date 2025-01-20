import axios, { AxiosError } from 'axios';
import { API_KEY, API_RECIPE_URL } from '../../utils/recipes/APIS';
import { IRecipe, IRecipesResponse } from '../../store/interfaces/recipes';

const getRecipes = async (tags: string): Promise<IRecipe[]> => {
    try {
        const response = await axios.get<IRecipesResponse>(`${API_RECIPE_URL}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                apiKey: API_KEY,
                includeNutrition: true,
                'include-tags': tags,
                number: 6
            }
        });
        return response.data.recipes;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw error;
        }
        throw error;
    }
};

const recipesServices = {
    getRecipes
};

export default recipesServices;
