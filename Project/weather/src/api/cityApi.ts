import { CityResponse } from "../types/cityResponse";

export const fetchCities = async (query: string): Promise<CityResponse[]> => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
        const data: { results: CityResponse[] } = await response.json();
        return data.results || []; // Возвращаем результаты или пустой массив
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
    }
};
