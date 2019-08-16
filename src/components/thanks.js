import React from "react";

export default (props) => (
    <div className={'thanksMessage'}>
        <h1>Hey {props.yourName}... message received!</h1>
        <p>(I'll get back to you ASAP)</p>
    </div>
);


