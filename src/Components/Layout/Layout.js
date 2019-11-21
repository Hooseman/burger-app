import React, {Component} from 'react';
import Aux from '../../hoc/Auxll';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
       this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        // dont use this way as it could give problems
        // this.setState({showSideDrawer: !this.state.showSideDrawer});

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
     }

    render() {
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
};

export default Layout;