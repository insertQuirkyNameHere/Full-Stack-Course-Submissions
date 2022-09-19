import React from "react";

const Person = ({name, number, onDelete})=>{
    return(
        <p>
            <strong>Name: </strong> {name}<br />
            <strong>Number: </strong>{number}
            <button onClick={onDelete}>Delete</button>
        </p>
    );
};

export default Person;