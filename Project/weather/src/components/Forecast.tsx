import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Table, Toast } from 'react-bootstrap';
import { useForecast } from '../api/useForecast';
import { formatDate } from '../utils/formatDate';
import { DailyForecast } from '../types/WeatherTypes';
import { weatherInterpretationRu } from '../types/weatherCode';

const Forecast: React.FC = () => {
    const { city } = useParams<{ city: string }>();
    const queryParams = new URLSearchParams(window.location.search);
    const lat = queryParams.get('lat');
    const lng = queryParams.get('lng');

    const latitude = lat ? Number(lat) : 0;
    const longitude = lng ? Number(lng) : 0;
    const { forecast, loading, error } = useForecast(latitude, longitude);
    const [dailyForecasts, setDailyForecasts] = useState<DailyForecast[]>([]);


    useEffect(() => {
        if (forecast) {
            const formattedForecasts = forecast.daily.time.map((time: string, index: number) => ({
                date: formatDate(time),
                minTemp: forecast.daily.temperature_2m_min[index],
                maxTemp: forecast.daily.temperature_2m_max[index],
                weather: weatherInterpretationRu[forecast.daily.weathercode[index]] || '',
            }));
            setDailyForecasts(formattedForecasts);
        }
    }, [forecast]);

    return (
        <div className='forecast'>
            <Button className="button" onClick={() => window.history.back()}>Назад</Button>
            <h1 className='table-header'>Прогноз на неделю для {city}</h1>
            {loading && (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>)}
            {error && (
                <Toast>
                    <Toast.Body>{error}</Toast.Body>
                </Toast>
            )}
            {!loading && !error && (
                <div className="forecast-container">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Мин. темп., °C</th>
                                <th>Макс. темп., °C</th>
                                <th>Погода</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dailyForecasts.map((forecast, index) => (
                                <tr key={index}>
                                    <td>{forecast.date}</td>
                                    <td>{forecast.minTemp}</td>
                                    <td>{forecast.maxTemp}</td>
                                    <td>{forecast.weather}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default Forecast;
