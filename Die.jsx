import React, { useState } from 'react';

export default function Self(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const [numDots, setNumDots] = useState(props.value);

     const createDots = () => {
        const dots = [];

        for (let i = 0; i < numDots; i++) {
            dots.push(<span key={i} className={i%2 ===0 ? "left-dot" : "right-dot" }></span>);
        }

        return dots;
    };

    const divs = []
  
    return (
       
            <div className="dice" style={styles} onClick={props.holdDice}>
                <div className="face" style={styles}>
                    {createDots()}
                </div>
            </div>
       
    );
};

