export enum DificultType {
    EASY = 'Fácil',
    MEDIUM = 'Medio',
    HARD = 'Difícil'
}

export interface IRecipesResponse {
    recipes: IRecipe[];
}

export interface IRecipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number | null;
    cookingMinutes: number | null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: IExtendedIngredients[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    nutrition: {
        nutrients: INutrients[];
        properties: IProperties[];
        flavonoids: IFlavonoids[];
        ingredients: IIngredients[];
        caloricBreakdown: {
            percentProtein: number;
            percentFat: number;
            percentCarbs: number;
        };
        weightPerServing: {
            amount: number;
            unit: string;
        };
    };
    summary: string;
    cuisines: any[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: IAnalyzedInstructions[];
    originalId: string | null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
}

interface IExtendedIngredients {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
        us: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
        metric: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
    };
}

interface INutrients {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}

interface IProperties {
    name: string;
    amount: number;
    unit: string;
}

interface IFlavonoids {
    name: string;
    amount: number;
    unit: string;
}

interface IIngredients {
    id: number;
    name: string;
    amount: number;
    unit: string;
    nutrients: INutrients[];
}

interface IAnalyzedInstructions {
    name: string;
    steps: ISteps[];
}

export interface ISteps {
    number: number;
    step: string;
    ingredients: IStepsIngredients[];
    equipment: IStepsEquipment[];
}

interface IStepsIngredients {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}

interface IStepsEquipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
}
