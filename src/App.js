import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTopBar from './AppTopBar';

const App = () => (
    <MuiThemeProvider>
        <AppTopBar/>
        {/*<RaisedButton label="Default" />*/}
    </MuiThemeProvider>
);

export default App;