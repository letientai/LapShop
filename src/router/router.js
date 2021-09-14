import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../screens/home/home";
import Introduct from "../screens/introduct/introduct";

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/introduct" component={Introduct} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;