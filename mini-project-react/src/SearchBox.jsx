import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4846200fd52f280747623da750598088"
    
    let getWeatherInfo = async()=>{
     try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
           city:city,
           temp : jsonResponse.main.temp,
           humidity: jsonResponse.main.humidity,
           feels_like:jsonResponse.main.feels_like,
           weather: jsonResponse.weather[0].description,
           temp_min: jsonResponse.main.temp_min,
        };
        console.log(result);
        return result;
     }catch(err) {
        throw err;
     }
        }

    

let handelChange =(event)=> {
    setCity(event.target.value);

}

let handelSubmit =async (event) => {
    try {
        event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch (err) {
        setError(true);
    }
};

    return(
        <div className='SearchBox'>
            <br></br>
            <form onSubmit={handelSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city}
            onChange={handelChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search
      </Button>
      {error && <p style={{color: "red"}}>No such placr exist!</p>}
      </form>
        </div>
    );
}