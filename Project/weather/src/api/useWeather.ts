import { useState, useEffect, useCallback } from 'react';
import { GeoDataResponse, WeatherResponse } from '../types/WeatherTypes';

export const useWeather = (city: string) => {
    const [data, setData] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchWeatherData = useCallback(async () => {
        try {
            const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
            const geoData: GeoDataResponse = await geoResponse.json();
            const { latitude, longitude } = geoData.results[0];

            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&windspeed_unit=ms`);
            const weatherData: WeatherResponse = await weatherResponse.json();
            setData(weatherData);
        } catch {
            setError('Ошибка при получении данных');
        } finally {
            setLoading(false);
        }
    }, [city]);

    useEffect(() => {
        fetchWeatherData();
    }, [fetchWeatherData]);
    
    return { data, loading, error };
};

