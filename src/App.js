import React, {Component} from 'react';
import './App.css';
//import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <div className="App">
                <AppBar
                    title="THE BASE"

                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={() => this.setState({open: !this.state.open})}
                />
                <Drawer open={this.state.open}
                        docked={false}
                        onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem> Menu Item </MenuItem>
                    <MenuItem> Menu Item </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default App;
