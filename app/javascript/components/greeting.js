import React from "react";
import PropTypes from 'prop-types';

const Greeting = (props) => {
    const {message} = props
    return (
        <div>
            {message || 'Loading Greeting'}
        </div>
    )
}

Greeting.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Greeting