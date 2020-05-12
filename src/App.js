import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header.component";
import Homepage from "./pages/Homepage/Homepage.component";
import ShopPage from "./pages/ShopPage/ShopPage.component";
import SignInSignUpPage from "./pages/Sign-in-sign-up/Sign-in-sign-up.component";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin-signup" component={SignInSignUpPage} />
            </Switch>
        </div>
    );
}

export default App;
