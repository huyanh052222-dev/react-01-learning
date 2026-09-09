
function GetDay() {
    const now = new Date();

    const weekday = now.toLocaleDateString("en-US", {weekday: "short"}).toUpperCase();
    const month = now.toLocaleDateString("en-US", {month: "short"}).toUpperCase();
    const day = now.toLocaleDateString("en-US", {day: "2-digit"});

    return (
        <div>{weekday} {month} {day}</div>
    );
}

export default GetDay;