import React, { useEffect, useState } from "react";
import DrumPad from "./DrumPad";
import Sounds from "react-sound"

const App = () => {
  const [displayText, setDisplayText] = useState("");

 const [audioSources, setAudioSources] = useState ({
	Q: ".src/sounds/Cev_H2.mp3",
 });

  const handleButtonClick = (text) => {
	setDisplayText(Text);
  };


return (
  <div id="drum-machine">
    <div id="display">{displayText}</div>
	<DrumPad id="Q"	text="Q" onClick={() => handleButtonClick("Audio1")}>Q</DrumPad>
	<DrumPad id="W"	text="W" onClick={() => handleButtonClick("Audio2")}>Q</DrumPad>
	<DrumPad id="E"	text="E" onClick={() => handleButtonClick("Audio3")}>Q</DrumPad>
	<DrumPad id="A"	text="A" onClick={() => handleButtonClick("Audio4")}>Q</DrumPad>
	<DrumPad id="S"	text="S" onClick={() => handleButtonClick("Audio5")}>Q</DrumPad>
	<DrumPad id="D"	text="D" onClick={() => handleButtonClick("Audio6")}>Q</DrumPad>
	<DrumPad id="Z"	text="Z" onClick={() => handleButtonClick("Audio7")}>Q</DrumPad>
	<DrumPad id="X"	text="X" onClick={() => handleButtonClick("Audio8")}>Q</DrumPad>
	<DrumPad id="C"	text="C" onClick={() => handleButtonClick("Audio9")}>Q</DrumPad>
  </div>
	)
};

export default App;