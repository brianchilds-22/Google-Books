import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./pages/Search";
import Saved from "./pages/Saved"; 
import Results from "./pages/Results";

function App () {
    Return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path="/saved" component={Saved}/>
                    <Route exact path="/results" component={Results}/>
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
        
    )
}

export default App;