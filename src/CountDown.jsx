import { useState, useEffect } from "react";
import "./style/time.css";
import "./App.css";
import PropTypes from "prop-types";
function CountDown({ countdown }) {
    const [countdownState, setCountdownState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [danger, setDanger] = useState(false);
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const targetDay = daysOfWeek[new Date(countdown.targetTime).getDay()];
    const targetDate = new Date(countdown.targetTime);
    const targetTime = targetDate.toLocaleTimeString();
    useEffect(() => {
        const targetTime = new Date(countdown.targetTime);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(interval);
                setCountdownState({
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
                if (days == 0) {
                    setDanger(true);
                }
                setCountdownState({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    return (
        <div className="main-card">
            <div className={`card-info ${danger ? "danger" : ""}`}>
                <p className="info">{countdown.title}</p>
                <hr />
                <p className="info">{countdown.description}</p>
                <hr />
                <p className="info">{countdown.type}</p>
                <hr />
                <p className="info">{`${targetDay} : ${targetTime}`}</p>
                <hr />
            </div>
            <div className={`container ${danger ? "danger" : ""}`}>
                <div className="mini-card">
                    <h1 className="day">{countdownState.days.toString()}</h1>
                    <p>DAY</p>
                </div>
                <span className="dot">.</span>
                <div className="mini-card">
                    <h1 className="hour">{countdownState.hours.toString()}</h1>
                    <p>HOUR</p>
                </div>
                <span className="dot">.</span>
                <div className="mini-card">
                    <h1 className="minute">
                        {countdownState.minutes.toString()}
                    </h1>
                    <p>MINUTE</p>
                </div>
                <span className="dot">.</span>
                <div className="mini-card">
                    <h1 className="minute">
                        {countdownState.seconds.toString()}
                    </h1>
                    <p>SECOND</p>
                </div>
            </div>
        </div>
    );
}

CountDown.propTypes = {
    countdown: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        targetTime: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
};

export default CountDown;
