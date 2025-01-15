export interface CurrentWeatherUnits {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
}

export interface CurrentWeather {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
}

export interface WeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather_units: CurrentWeatherUnits;
    current_weather: CurrentWeather;
}


export interface WeatherForecastResponse {
    latitude: number;
    longitude: number;
    daily: {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
}


export interface GeoDataResponse {
    results: Array<{
        id: number;
        name: string;
        latitude: number;
        longitude: number;
        elevation: number;
        feature_code: string;
        country_code: string;
        admin1_id: number;
        timezone: string;
        population: number;
        country_id: number;
        country: string;
        admin1: string;
    }>;
}

export interface DailyForecast {
    date: string;
    minTemp: number;
    maxTemp: number;
    weather: string;
}

