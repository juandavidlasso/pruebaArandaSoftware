import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import recipesServices from '../../../services/recipes/service';
import { IRecipe } from '../../../store/interfaces/recipes';

type UseGetRecipesProps = {
    params: any;
};

export const useGetRecipes = ({ params }: UseGetRecipesProps) =>
    useQuery<IRecipe[], AxiosError>({
        queryKey: ['recipes'],
        queryFn: () => recipesServices.getRecipes({ ...params }),
        retry: false,
        refetchOnMount: false,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
