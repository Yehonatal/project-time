import { useState } from "react";
import PropTypes from "prop-types";

const GetDate = ({ onSetTargetTime }) => {
    const [targetTime, setTargetTime] = useState("");

    const handleChange = (event) => {
        setTargetTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const parsedTime = new Date(targetTime);
        onSetTargetTime(parsedTime);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter target time:
                    <input
                        type="datetime-local"
                        value={targetTime}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Set Target Time</button>
            </form>
        </div>
    );
};
GetDate.propTypes = {
    onSetTargetTime: PropTypes.func.isRequired,
};
export default GetDate;
