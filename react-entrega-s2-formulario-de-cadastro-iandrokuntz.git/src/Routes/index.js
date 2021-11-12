import { useState } from "react"
import {Switch, Route} from "react-router-dom"
import Form from "../pages/Form"
import Home from "../pages/Home"

const Routes = () => {

    const [isLoggedIn, setIsLoggedIn] = useState()

    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Form setIsLoggedIn={setIsLoggedIn}/>
                </Route>
                <Route path="/home">
                    <Home isLoggedIn={isLoggedIn}/>
                </Route>
            </Switch>

        </div>

    )
}

export default Routes