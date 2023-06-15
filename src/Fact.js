// src/Fact.js
import React from 'react';
import { useSelector } from 'react-redux';

function Fact() {
    const fact = useSelector(state => state.data.fact)
    const state = useSelector(state => state);
    console.log(state);
    if(!fact) {
        return <p>Loading...</p>
    }
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // sets the height to 100% of the viewport height
        fontSize: '2em'  // increases the font size
      }}>
        <p>{fact && fact.fact}</p>
    </div>
);
}

export default Fact;