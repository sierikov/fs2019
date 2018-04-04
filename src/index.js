import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from 'material-ui/styles';
import {getMuiTheme} from "material-ui/styles/index";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: 'black',
    },
    appBar: {
        height: 50,
    },
});

ReactDOM.render(<MuiThemeProvider muiTheme={muiTheme}><App/></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
