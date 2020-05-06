import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage.component";

const HatsPage = () => <h1>HATS Page</h1>;

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
