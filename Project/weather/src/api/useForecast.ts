import { useEffect, useState } from 'react';
import { WeatherForecastResponse } from '../types/WeatherTypes';

export const useForecast = (lat: number, lng: number) => {
  const [forecast, setForecast] = useState<WeatherForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=GMT`);
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        const data: WeatherForecastResponse = await response.json();
        setForecast(data);
      } catch  {
        setError('Ошибка при получении данных');
    } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [lat, lng]);

  return { forecast, loading, error };
};
