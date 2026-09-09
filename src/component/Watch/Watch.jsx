import { useEffect, useState } from "react";
import WatchFace from "./WatchFace";

function Watch() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 100);

        return () => clearInterval();
    }, [])

    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    return (
        <>
            <WatchFace
                hour = {hour}
                min = {min}
                sec = {sec}
            />
        </>
    )
}

export default Watch;