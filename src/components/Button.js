import React, { Component } from 'react';
import '../index.css';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    return (
    <a href={props.linkRef} className="btn btn-primary" target='_blank'>
        {
            props.children
        }
    </a>
    );
}

Button.propTypes  = {
    linkRef: PropTypes.string.isRequired,
}


export default Button;
