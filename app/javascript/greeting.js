import React from "react";

const Greeting = (props) => {
    const {message} = props
    return (
        <div>
            {message}
        </div>
    )
}

export default Greeting