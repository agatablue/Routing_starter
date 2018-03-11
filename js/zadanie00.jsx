import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  NavLink as Link,
  Switch,
  NavLink,
} from 'react-router-dom';



class Topic extends React.Component {
    render() {
        console.log(this.props.match)
        return <div>
            <h3>{this.props.match.params.topicId}</h3>
        </div>
    }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics </h2>
    <Link to={`${match.url}/exampleTopicId`}>
      Example topic
    </Link>
    <Route path={`${match.url}/:topicId`} component={Topic}/>
  </div>
) 



class Navigation extends React.Component {
  render() {


    const activeStyle = {
            backgroundColor:'green'
        };
    return <div>
         <h1>App</h1>
         <ul>
           <li>
             <Link to="/" activeStyle={activeStyle} exact>Home</Link>
           </li>
           <li>
             <Link to="/user" activeStyle={activeStyle} exact>User</Link>
           </li>
           <li>
             <Link to="/topics" activeStyle={activeStyle} exact>Topics</Link>
           </li>
           <li>
             <Link to="/contact" activeStyle={activeStyle} exact>Contact</Link>
           </li>
         </ul>
      </div>;
  }
}

class Main extends React.Component {
    render() {
      return <h1>Hello, World!
          <Link to="/contact">Go to contact</Link>
      </h1>;
    }
  }
  class Contact extends React.Component {
    render() {
      return <h1>Contact us at contact@example.com
          <Link to="/">Main</Link>
      </h1>;
    }
  }

  class UserInfo extends React.Component {
    render() {
      return <h1>
              Info about User with ID:
              {this.props.match.params.id}
           </h1>;
    }
  }

class NotFound extends React.Component {
  render() {
    return <h1>404,Nothing is here</h1>;
  }
}
  class App extends React.Component {
      
    render() {

      return <HashRouter>
            <div>
              <Navigation />
             <Switch>
                <Route exact path='/' component={Main} />
                 <Route path='/user/:id' component={UserInfo} />
                <Route path='/contact' component={Contact} />
                <Route path='/topics' component={Topics} />
                <Route component={NotFound} />
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