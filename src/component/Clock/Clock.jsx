import Watch from '../Watch/Watch.jsx'
import {useEffect, useState} from 'react';
import { Bell, Moon, Sun} from "lucide-react";
import GetDay from '../Day/GetDay.jsx';
import Weather from '../Weather/Weather.jsx'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";

function Clock() {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval();
    }, [])

    const timeHour = String(time.getHours()).padStart(2, "0");
    const timeMin = time.toLocaleTimeString("vi-VN", {
        minute: "2-digit"
    })

    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 22;

    const hello = isDay ? "Good morning" : "Good Evening";

    return (

        <div className = {`clock-wrap ${isDay ? "light-mode" : "night-mode"}`}>
            <div className ="left clock-style">
                <Bell/>
                {isDay ? <Sun/> : <Moon/>}
            </div>
            <div className="bottom clock-style">{timeHour}<span className='colon'>:</span>{timeMin}</div>

            <Watch/>

            <div className='rightClock'>
                <div className={`lineClock ${isDay ? "line-light" : "line-night"}`}></div>

                <div className="right clock-style">
                    <div className="date"><GetDay/></div>
                    <div className= {`lineTemp ${isDay ? "line-light" : "line-night"}`}></div>
                    <div className={`text ${isDay ? "light-mode-text-third" : "night-mode"}`}>{hello}</div>
                    <div className={`temp ${isDay ? "light-mode-text-third" : "night-mode"}`}>
                        <div className="temp-digit"><Weather/></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Clock;