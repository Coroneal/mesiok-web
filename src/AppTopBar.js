import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

injectTapEventPlugin();

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const toolbarTitleStyle = {
    textAlign: 'center',
    paddingLeft: '300px'
};

const leftToolbarGroupStyle = {
    width: '500px'
};

const AppTopBar = () => (
    <Toolbar>
        <ToolbarGroup style={leftToolbarGroupStyle}>
            <ToolbarTitle text="Mesiok" style={toolbarTitleStyle} />
        </ToolbarGroup>
        <ToolbarGroup>
            <RaisedButton label="Zaloguj" primary={true}/>
            <RaisedButton label="Rejestruj" primary={true} />
        </ToolbarGroup>
    </Toolbar>
);

export default AppTopBar;