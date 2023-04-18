import React, { useState, useEffect } from "react";
import "./deadline.css"
const DeadlineCard = ({ deadline, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [deadline]);

  function calculateTimeLeft(deadline) {
    const timeDiff = Date.parse(deadline) - Date.now();
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
    const secondsLeft = Math.floor((timeDiff / 1000) % 60);

    return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
  }

  function handleDelete() {
    onDelete();
  }

  return (
    <div className="deadline-card">
      <div className="deadline-card-header">
        <h2>{deadline.title}</h2>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="deadline-card-timer">
        <p>{timeLeft.daysLeft} days</p>
        <p>{timeLeft.hoursLeft} hours</p>
        <p>{timeLeft.minutesLeft} minutes</p>
        <p>{timeLeft.secondsLeft} seconds</p>
      </div>
    </div>
  );
};

function DigitalTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes(minutes => minutes + 1);
    }
  }, [seconds]);

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHours(hours => hours + 1);
    }
  }, [minutes]);

  return (
    <div className="digital-timer">
      <div className="digits">
        <div className="digit">
          <span>{hours.toString().padStart(2, '0')}</span>
          <span>Hours</span>
        </div>
        <div className="digit">
          <span>{minutes.toString().padStart(2, '0')}</span>
          <span>Minutes</span>
        </div>
        <div className="digit">
          <span>{seconds.toString().padStart(2, '0')}</span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

const DeadlineList = ({ deadlines }) => {
  function handleDelete(index) {
    // Delete the deadline at the specified index
  }
  deadlines = [
    {
      id: 1,
      deadlines:new Date(2024,12,12),
    },
    // {
    //   id: 2,
    //   deadlines: 2332-32-23,
    // },{
    //   id: 3,
    //   deadlines: 2332-32-23,
    // },{
    //   id: 4,
    //   deadlines: 2332-32-23,
    // },{
    //   id: 5,
    //   deadlines: 2332-32-23,
    // },{
    //   id: 6,
    //   deadlines: 2332-32-23,
    // },
  ];

  return (
    <div className="deadline-list">
    <div className="deadline-card">
    <DigitalTimer />
    Deadline title
    deadline Description
    
    
    </div>
    </div>
  );
};

      // {deadlines.map((deadline, index) => (
      //   {deadline}
        
      // ))}
{/* <DeadlineCard
          key={deadline.id}
          deadline={deadline}
          onDelete={() => handleDelete(index)}
        /> */}
export default DeadlineList;
