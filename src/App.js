import './App.css'
import React, {Component} from 'react'
import fusTheme from './fusTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {BrowserRouter, NavLink, Route} from 'react-router-dom'

injectTapEventPlugin();

class App extends Component {
    handleClose = () => this.setState({open: false});

    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
                    <div>
                        <AppBar
                            title='The Base'
                            iconClassNameRight='muidocs-icon-navigation-expand-more'
                            onLeftIconButtonClick={() =>
                                this.setState({open: !this.state.open})}
                        />
                        <Drawer
                            open={this.state.open}
                            docked={false}
                            onRequestChange={open => this.setState({open})}
                        >
                            <NavLink to='/'>
                                <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
                            </NavLink>
                            <NavLink to='/logos'>
                                <MenuItem onTouchTap={this.handleClose} primaryText="Logos"/>
                            </NavLink>
                            <NavLink to='/posters'>
                                <MenuItem onTouchTap={this.handleClose}>Posters</MenuItem>
                            </NavLink>
                            <NavLink to='/letterhead'>
                                <MenuItem onTouchTap={this.handleClose}>Letterhead</MenuItem>
                            </NavLink>
                            <NavLink to='/share-a-story'>
                                <MenuItem onTouchTap={this.handleClose}>Share a Story</MenuItem>
                            </NavLink>
                            <NavLink to='/service-request-form'>
                                <MenuItem onTouchTap={this.handleClose}>Service Request Form</MenuItem>
                            </NavLink>
                            <NavLink to='/tutorial'>
                                <MenuItem onTouchTap={this.handleClose}>Tutorial</MenuItem>
                            </NavLink>
                        </Drawer>

                        <Route exact path='/' render={() => <h1>Home View</h1>}/>
                        <Route
                            exact
                            path='/logos-posters'
                            render={() => <h1>Logos and Posters View</h1>}
                        />
                        <Route exact path='/logos' render={() => <h1>Logos View</h1>}/>
                        <Route exact path='/posters' render={() => <h1>Posters View</h1>}/>
                        <Route
                            exact
                            path='/letterhead'
                            render={() => <h1>Letterhead View</h1>}
                        />
                        <Route
                            exact
                            path='/share-a-story'
                            render={() => <h1>Share a Story View</h1>}
                        />
                        <Route
                            exact
                            path='/planning-guide'
                            render={() => <h1>Planning Guide View</h1>}
                        />
                        <Route
                            exact
                            path='/services'
                            render={() => <h1>Services View</h1>}
                        />
                        <Route
                            exact
                            path='/glossary'
                            render={() => <h1>Glossary View</h1>}
                        />
                        <Route
                            exact
                            path='/service-request-form'
                            render={() => <h1>Service Request Form View</h1>}
                        />
                        <Route
                            exact
                            path='/tutorial'
                            render={() => <h1>Tutorial View</h1>}
                        />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        )
    }
}

export default App