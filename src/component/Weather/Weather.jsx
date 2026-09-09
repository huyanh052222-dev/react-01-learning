import { useEffect, useState } from "react";

function Weather() {
    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (posistion) => {
            const last = posistion.coords.latitude;
            const lon = posistion.coords.longitude;

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${last}&longitude=${lon}&current=temperature_2m`
            );

            const weatherData = await weatherResponse.json();

            setTemperature(weatherData.current.temperature_2m);

            const locationResponse = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${last}&lon=${lon}&format=json`
            );

            const locationData = await locationResponse.json();

            setCity(
                locationData.address.city ||    
                "Không xác định"
            );
        })
    }, [])

    return (
        <div>
            <h2>{city != null ? `${city}` : '--'}</h2>
            <p>{temperature !== null ? `${temperature}°C` : "Loading..."}</p>
        </div>
    )
}

export default Weather