import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Edit from "./layouts/edit";
import NotFound from "./layouts/not-found";
import Card from "./layouts/card";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Card} />
                <Route path="/edit" component={Edit} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
