import React from 'react';
import Aux from '../../hoc/Auxll';
import classes from './Layout.module.css';


const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;