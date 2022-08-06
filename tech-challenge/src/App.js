import React from 'react'
import { LoginPage } from './pages/loginpage/LoginPage';
import { HomePage } from './pages/homepage/HomePage';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import { SignupPage } from './pages/signuppage/SignupPage';

function App() {
  const [auth, setAuth] = React.useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
            <Route path="/" exact>
              <LoginPage 
                auth={auth} 
                />
            </Route>
            <Route path="/signup" component={SignupPage} exact/>
            <Route path="/home" exact><HomePage auth={auth} setAuth={setAuth}/></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
