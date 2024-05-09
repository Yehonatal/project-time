import { useState, useEffect } from "react";
import "./style/time.css";
import "./App.css";

function App() {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetTime = new Date("May 11, 2024 08:00:00 GMT+0300");
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(interval);
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setCountdown({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="mini-card">
                <h1 className="day">{countdown.days}</h1>
                <p>DAY</p>
            </div>
            <span className="dot">.</span>
            <div className="mini-card">
                <h1 className="hour">{countdown.hours}</h1>
                <p>HOUR</p>
            </div>
            <span className="dot">.</span>
            <div className="mini-card">
                <h1 className="minute">{countdown.minutes}</h1>
                <p>MINUTE</p>
            </div>
            <span className="dot">.</span>
            <div className="mini-card">
                <h1 className="minute">{countdown.seconds}</h1>
                <p>SECOND</p>
            </div>
        </div>
    );
}

export default App;