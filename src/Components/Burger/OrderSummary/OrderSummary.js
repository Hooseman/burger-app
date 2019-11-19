import React from 'react';

import Aux from '../../../hoc/Auxll';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li> 
        );
    });
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>You have the following ingredients on your burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;