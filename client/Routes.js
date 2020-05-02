import React from 'react';
import { Route , Switch ,BrowserRouter as  Router} from 'react-router-dom';
import Hello from './Hello';
import Bye from './Bye';
import Main from './container/Main';
class Routes extends React.Component {
    render() {
        return (
        <Router> 
            <Switch>
                <Route exact path='/'  component={Main}/>
                <Route path = '/hellfront' component={Hello}><h1>Hijacked</h1></Route>
                <Route path = '/byefront/:name'  component={Bye}/>
                <Route path='/sup' render={()=><h1>WSdD</h1>}/>
                <Route path='/super' render={()=><h1>POOO</h1>}></Route>
                
            </Switch>
        </Router>
        );
    }
}
export default Routes;