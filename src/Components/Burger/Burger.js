import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // grabs an object and turns it into an array
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    })
    // takes transformedIngredients array and turns into a fat array
    .reduce((arr,el) => {
        return arr.concat(el)
    }, [] );
    // ----------------------------------------------------------
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients</p>
    }
    

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
