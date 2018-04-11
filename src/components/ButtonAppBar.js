import React from 'react';
import PropTypes from 'prop-types';
import {createStyleSheet, withSrtyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui/Menu';
import {IconButton} from "material-ui";

const styleSheet = createStyleSheet('ButtonAppBar', {
   root: {
       marginTop: 30,
       width: '100%',
   },
    flex: {
       flex: 1,
    },
});
function ButtonAppBar(props) {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        Title
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ButtonAppBar);