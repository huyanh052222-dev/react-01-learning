import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Weather() {
    const [temperature, setTemperature] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (posistion) => {
            const last = posistion.coords.latitude;
            const lon = posistion.coords.longitude;

            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${last}&longitude=${lon}&current=temperature_2m`
            );

            const weatherData = await weatherResponse.json();

            setTemperature(weatherData.current.temperature_2m);

        })
    }, [])

    return (
        <div>
            <p><FontAwesomeIcon icon={faTemperatureQuarter} />{temperature !== null ? `${temperature}°C` : "Loading..."}</p>
        </div>
    )
}

export default Weather