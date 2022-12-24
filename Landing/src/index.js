import React from 'react';
import ReactDOM from 'react-dom';
import Index1 from './Index1';
import Index2 from './Index2';
import Index3 from './Index3';
import Index4 from './Index4';
import Index5 from './Index5';
import Index6 from './Index6';
import Index7 from './Index7';
import Index8 from './Index8';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {

    render() {
        return(
            <BrowserRouter basename={'/'} >
                <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Index1}/>
                <Route path={`${process.env.PUBLIC_URL}/index-1`} component={Index1}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-2`} component={Index2}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-3`} component={Index3}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-4`} component={Index4}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-5`} component={Index5}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-6`} component={Index6}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-7`} component={Index7}/>  
                <Route path={`${process.env.PUBLIC_URL}/index-8`} component={Index8}/>   
              </Switch>
          </BrowserRouter>
        );
    }
   }

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
