import React from "react";


const Button = ({ label, handleClick }) => (
    <button className="text-xl text-accent hover:text-pcolor" onClick={handleClick}>
        {label}
    </button>
)

export default Button;