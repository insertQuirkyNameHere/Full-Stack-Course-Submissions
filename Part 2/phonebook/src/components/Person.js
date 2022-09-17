import React from "react";

const Person = ({name, number})=>{
    return(
        <p>
            <strong>Name: </strong> {name}<br />
            <strong>Number: </strong>{number}
        </p>
    );
};

export default Person;