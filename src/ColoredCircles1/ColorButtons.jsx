import React from "react";
import ColorButton from "./ColorButton";

const ColorButtons = ({options, addCircle}) => {
  return (
    <div className="ColorButton">
      {options.map(color => (
        <ColorButton color={color} addCircle={addCircle} />
        ))}
    </div>
  )
}

export default ColorButtons;