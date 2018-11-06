import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js'
import * as serviceWorker from './serviceWorker';


const element = <Header name="首页" />;

ReactDOM.render(
    element,
    document.getElementById('root')
)

serviceWorker.unregister();
