import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Correct package

const Icondownarrow = () => {
    return (
        <FontAwesomeIcon icon={faAngleDown} style={{ fontSize: '20px', marginLeft: '10px' }} />
    );
};

export default Icondownarrow;