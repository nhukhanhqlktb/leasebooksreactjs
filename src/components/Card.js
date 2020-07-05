import React, { Component } from 'react';
// import '../index.css';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component{
    render(){
        const { infoCard } = this.props;
        return (
          <div class="card-price">
              <img src={infoCard.imgUrl} alt=""/>
              <div class="card-body">
                  <h4 class="title">{infoCard.title}</h4>
                  <p class="text">{infoCard.discription}</p>
                  <a href="#" class="btn btn-primary">Add to Cart</a>
              </div>
          </div>
        );
    }
}

Card.propTypes  = {
    infoCard: PropTypes.shape({
        title: PropTypes.string.isRequired,
        discription: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    })
}

export default Card;
