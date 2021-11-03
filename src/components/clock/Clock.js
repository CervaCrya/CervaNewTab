import React, {useState} from 'react';
import './Clock.css';

const Clocks = () => {
    const [timeHours, setHours] = useState(() => {
        const currentTime = new Date();
        const hours = String(currentTime.getHours());
        if(hours.length == 1)
            return '0'+hours
        else
            return hours;
    });
    const [timeMinutes, setMinutes] = useState(() => {
        const currentTime = new Date();
        const minutes = String(currentTime.getMinutes());
        if(minutes.length == 1)
            return '0'+minutes;
        else
            return minutes;
    });
    let timer = setInterval(() => {
        const currentTime = new Date();
        const minutes = String(currentTime.getMinutes());
        const hours = String(currentTime.getHours());
        if(minutes.length == 1)
            setMinutes('0'+minutes);
        else
            setMinutes(minutes);
        if(hours.length == 1)
            setHours('0'+hours)
        else
            setHours(hours)
        }, 500)

    return (
        <div id='Clock' className='unselectable'>
            <div>{timeHours}:{timeMinutes}</div>
        </div>
    );
};

export default Clocks;