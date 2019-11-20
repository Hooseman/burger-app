import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../Assets/Images/burger-logo (1).png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="A burger"/>
    </div>
);

export default logo;