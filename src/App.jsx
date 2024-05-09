import { useState } from "react";
import CountDown from "./CountDown";
import GetDate from "./GetDate";

function App() {
    const [countdowns, setCountdowns] = useState(() => {
        const storedCountdowns = localStorage.getItem("countdowns");
        return storedCountdowns ? JSON.parse(storedCountdowns) : [];
    });
    const [showForm, setShowForm] = useState(false);

    const handleCreateCountDown = (newCountdown) => {
        const updatedCountdowns = [...countdowns, newCountdown];
        localStorage.setItem("countdowns", JSON.stringify(updatedCountdowns));
        setCountdowns(updatedCountdowns);
        setShowForm(false);
    };

    return (
        <div>
            <h2>Do you want to track another deadline ?</h2>
            <button onClick={() => setShowForm(true)}>Create New</button>
            <br />
            <br />
            {showForm && (
                <GetDate
                    onCreateCountDown={handleCreateCountDown}
                    onCancelCreate={setShowForm}
                />
            )}
            {countdowns.map((countdown, index) => (
                <CountDown key={index} countdown={countdown} />
            ))}
        </div>
    );
}

export default App;
