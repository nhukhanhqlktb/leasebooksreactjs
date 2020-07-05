import React, { Component } from 'react';
import '../index.css';
import './Button.css';
import PropTypes from 'prop-types';

class Button extends Component {
    render(){
        return (
        <a href={this.props.linkRef} className="btn btn-primary" target='_blank'>
            {
                this.props.children
            }
        </a>
    );
}
}

Button.propTypes  = {
    linkRef: PropTypes.string.isRequired,
}


export default Button;
