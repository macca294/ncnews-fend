import React from "react";

const Error = (props) => {

    return(
<div> 
    <h1>whoops! Sorry {props.location.state.displayerror}</h1>
</div>

    )
};

export default Error;
