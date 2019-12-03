import React, {Component} from 'react';

import Aux from '../../../hoc/Auxll';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentWillUpdate() {
    //     console.log('[OrderSummary] WillUpdate');
    // };

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasedCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
        </Aux>);
    };
};


export default OrderSummary;