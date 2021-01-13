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

function LessRouting() {
    return (
        <>
            <Router>
                <ol>
                    <li>
                        <Link to="/"> no path</Link>
                    </li>
                    <li>
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/users">User</Link>
                    </li>
                </ol>
                <Switch>
                    <Route path="/">
                        <h1> no path</h1>
                    </Route>
                    <Route path="/about">
                        <h1> about </h1>
                    </Route>
                    <Route path="/users">
                        <h1>User </h1>
                    </Route>
                    <Route>
                        <h1> no matchef defoult</h1>
                    </Route>
                </Switch>
                <button>Increment</button>
            </Router>
        </>
    )
}
export default LessRouting
