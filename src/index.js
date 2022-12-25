import React from 'react';
import ReactDOM from 'react-dom';
import Index1 from './Index1';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {

    render() {
        return(
            <BrowserRouter basename={'/'} >
                <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Index1}/>
              </Switch>
          </BrowserRouter>
        );
    }
   }

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
