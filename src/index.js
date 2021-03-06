import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux"
import store from "./redux/store.js"
import App from './App/App.js'

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)