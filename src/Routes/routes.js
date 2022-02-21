import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Devs from '../pages/Devs'
import Home from '../pages/Home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/devs"} component={Devs} />
            </Switch>
        </BrowserRouter>
    )
}