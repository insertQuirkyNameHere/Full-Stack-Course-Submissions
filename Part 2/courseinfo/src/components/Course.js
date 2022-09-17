import React  from "react";

const Course = ({course}) => {

    const parts = course.parts;

    return(
        <>
            <h2>{course.name}</h2>

            {parts.map ( part => <p key={part.id}>{part.name} {part.exercises}</p>)}

            <p>
                <strong>
                    total of {parts.reduce(
                        (accumulator, part) => part.exercises+accumulator,
                        0
                    )} exercises
                    
                </strong>
            </p>
        </>
    );
};

export default Course;