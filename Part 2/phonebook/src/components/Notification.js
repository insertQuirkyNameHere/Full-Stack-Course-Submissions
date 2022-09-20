import React from "react";

const Notification = (props) => {
    if(Object.keys(props.message).length===0){  
        return <></>
    }
    else{
        const msg = props.message;
        const className=`notification ${msg.type}`;
        return(
            <div className={className}>{msg.content}</div>
        );
    }
}

export default Notification;