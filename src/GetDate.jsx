import { useState } from "react";
import "./style/getdate.css";
import PropTypes from "prop-types";

const GetDate = ({ onCreateCountDown, onCancelCreate }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [targetTime, setTargetTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Create a new countdown object
        const newCountdown = {
            title,
            description,
            type,
            targetTime: new Date(targetTime),
        };
        // Pass it back to the parent component
        onCreateCountDown(newCountdown);
        // Clear the form fields
        setTitle("");
        setDescription("");
        setType("");
        setTargetTime("");
    };
    const handleCancel = () => {
        onCancelCreate(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Type:
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>
                <label>
                    Target Time:
                    <input
                        type="datetime-local"
                        value={targetTime}
                        onChange={(e) => setTargetTime(e.target.value)}
                    />
                </label>
                <div className="btns">
                    <button type="submit">Create Countdown</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

GetDate.propTypes = {
    onCreateCountDown: PropTypes.func.isRequired,
    onCancelCreate: PropTypes.func.isRequired,
};

export default GetDate;
