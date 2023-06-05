import React from "react";

const DrumPad = ({ id, text, onClick }) => {
    return (
     <div
     id={id}
     className="drum-pad"
     onClick={onClick}
     >{text}
     </div>   
    );
};

export default DrumPad;