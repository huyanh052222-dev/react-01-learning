function WatchFace({hour, min, sec}) {
    const secDeg = sec*6;
    const minDeg = min*6 + sec * 0.1;
    const hourDeg = (hour % 12) * 30 + min*0.5;

    const isDay = hour >= 6 && hour < 22;

    return (
        <>
            <div className={`clock-face ${isDay ? "light-wrap" : "night-wrap"}`}>
                <div className="hand hour-hand" style = {{transform: `rotate(${hourDeg}deg)`}}/>
                <div className="hand min-hand" style = {{transform: `rotate(${minDeg}deg)`}}/>
                <div className="hand sec-hand" style = {{transform: `rotate(${secDeg}deg)`}}/>
            </div>
        </>
    )
}
export default WatchFace;