import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetchCities } from '../api/cityApi';
import { CityResponse } from '../types/cityResponse';
import '../styles/AutocompleteInput.scss';

const AutocompleteInput = () => {
    const [city, setCity] = useState<string>('');
    const [suggestions, setSuggestions] = useState<CityResponse[]>([]);
    const navigate = useNavigate();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCity(value);
        if (value) {
            const results = await fetchCities(value);
            setSuggestions(results);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (selectedCity: string, latitude: number, longitude: number) => {
        setSuggestions([]);
        navigate(`/weather/${selectedCity}?lat=${latitude}&lng=${longitude}`);
    };

    return (
       
<div style={{ position: 'relative' }}> 
            <Form.Control
                type="text"
                value={city}
                onChange={handleChange}
                placeholder="Введите город"
            />
            {suggestions.length > 0 && (
                <ListGroup style={{ position: 'absolute', zIndex: 1000, width: '100%' }}> 
                    {suggestions.map((suggestion) => (
                        <ListGroup.Item key={suggestion.id} onClick={() => handleSelect(suggestion.name, suggestion.latitude, suggestion.longitude)}>
                            {/* Отображение страны или штата/региона, если есть!*/}
                            {suggestion.name} {suggestion.country ? ` - ${suggestion.country}` : ''} {suggestion.admin1 ? `, ${suggestion.admin1}` : ''}                        
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default AutocompleteInput;
