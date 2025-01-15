import { useWeather } from '../api/useWeather';
import { useNavigate } from 'react-router-dom';
import { weatherInterpretationRu } from '../types/weatherCode';

interface CardWeatherProps {
    city: string;
}

const CardWeather: React.FC<CardWeatherProps> = ({ city }) => {
    const { data, loading, error } = useWeather(city);
    const navigate = useNavigate();

    if (loading) return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>)
    if (error) return <div>{error}</div>;

    const { current_weather } = data || {};

    return (
        <div className="card-weather">
            <div className='card'>
                <h2>{city}</h2>
                <p>Температура: {current_weather?.temperature}°C</p>
                <p>Состояние: {weatherInterpretationRu[current_weather?.weathercode || 0]}</p>
                <p>Скорость ветра: {current_weather?.windspeed} м/с</p>
                <button onClick={() => navigate(`/weather/${city}?lat=${data?.latitude}&lng=${data?.longitude}`)}>
                    Смотреть прогноз
                </button>
            </div>
        </div>
    );
};

export default CardWeather;
