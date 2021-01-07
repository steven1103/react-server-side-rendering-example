import { Route, Switch } from "react-router-dom"
import byeRoute from "../Routes/Bye"
import helloRoute from "../Routes/Hello"

const Routes = () => {
    return (
        <Switch>
            <Route component={helloRoute} path="/hello" />
            <Route component={byeRoute} path="/byebye" />
        </Switch>
    )
}

export default Routes;