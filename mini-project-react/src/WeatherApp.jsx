import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
 const [weatherInfo, setWeatherInfo] = useState({
    city: "Dhaka",
    feels_like: 34.43,
    humidity: 94,
    temp: 27.99,
    temp_min: 27,
    weather:"haze",
 });

 let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
 }


    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Mehedi Hasan Raju</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
            
    );
}