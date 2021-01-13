import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom'

function LessRouting(props) {
    return (
        <>
            <div>
                <h1>Added new routing {props.title} </h1>
            </div>
        </>
    )
}
export default LessRouting
