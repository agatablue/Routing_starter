import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  NavLink as Link,
  Switch,
  NavLink,
} from 'react-router-dom';

const Main = () => (
    <h1> Hello World </h1>
)

const HelloYou = ({match}) => (
    <h1> Hello {match.params.name} </h1>
)

const CheckAge = ({match}) => (
     <div> {match.params.age > 18 ? 'Pełnoletni' : 'Niepełnoletni'} 
         {match.params.age}
    </div>
)

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
             <Switch>
                <Route exact path='/' component={Main} />
                 <Route path='/hello/:name' component={HelloYou} />
                <Route path='/checkage/:age' component={CheckAge} />
           </Switch>
           </div>
       </HashRouter>;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});