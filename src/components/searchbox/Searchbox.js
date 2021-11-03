import React from 'react';
import './Searchbox.css'
const Searchbox = () => {
    const handleKeyPress = (event) => {
        if(event.key=== 'Enter'){
            const src = document.getElementById('searchbox')
            const url = String(src.value);
            window.location.href = 'https://www.google.com/search?q=' + url
        }
    }
    return (
        <div id="searcboxD">
            <input id="searchbox" onKeyPress={handleKeyPress} autoFocus={true}/>
        </div>
    );
};

export default Searchbox;