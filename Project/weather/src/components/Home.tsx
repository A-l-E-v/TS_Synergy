import CardWeather  from './CardWeather';
import { defaultCities } from '../types/defaultCities';
import AutocompleteInput from './AutocompleteInput';

const Home: React.FC = () => {

    return (
        <div className="home">
            <div className="header">
                <h1>Weather</h1>
                <AutocompleteInput />
            </div>
            <div className="weather-cards">
                {defaultCities.map((city) => (
                    <CardWeather key={city} city={city} />
                ))}
            </div>
        </div>
    );
       
};

export default Home;
