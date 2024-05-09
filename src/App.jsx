// App.jsx
import { useState } from "react";
import CountDown from "./CountDown";
import GetDate from "./GetDate";

function App() {
    const [targetTime, setTargetTime] = useState(null);

    const handleSetTargetTime = (time) => {
        setTargetTime(time);
    };

    return (
        <div>
            {targetTime ? (
                <CountDown targetTime={targetTime} />
            ) : (
                <GetDate onSetTargetTime={handleSetTargetTime} />
            )}
        </div>
    );
}

export default App;
