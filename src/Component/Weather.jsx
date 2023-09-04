import React, { useState } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState([]); // Weather data as an array
    const apik = "3045dd712ffe6e702e3245525ac7fa38";

    const btn = () => {
        const input = document.getElementById('input1');
        if (input.value != '') {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + apik)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setWeather([data]);
                    input.value = ''
                })
                .catch((error) => {
                    console.log(error);
                });
        }else{
            alert('Please fill the input!');
        }
        console.log(weather);
    };

    return (
        <div className='container my-4 weather'>
            <div className="input-group mb-3 weather-input">
                <input type="text" className="form-control" placeholder="CityName" aria-label="Recipient's username" aria-describedby="basic-addon2" id="input1" />
                <div className="input-group-append">
                    <span className="input-group-text" style={{cursor: 'pointer'}} onClick={btn}>search</span>
                </div>
            </div>
            {weather.map((data) => (
                <div className='weather-data shadow p-4'>
                    <h3 className='fw-bold' ><span>City :</span> {data.name}</h3>
                    <h3 className='fw-bold'><span>Temperature :</span> {data.main.temp + ' °C '}</h3>
                    <h3 className='fw-bold' ><span>Humidity :</span> {data.main.humidity}</h3>
                    <h3 className='fw-bold' ><span>Wind Speed :</span> {data.wind.speed + ' Km/h'}</h3>
                </div>
            ))}

        </div>
    );
};

export default Weather;

// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
// https://github.com/Bhaskar-maity/Javascript-weather-app/blob/main/main.js