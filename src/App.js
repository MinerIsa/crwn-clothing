import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>Jackets Page</h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
      <Route exact path='/shop/jackets' component={JacketsPage}/>
    </Switch>
    </div>
  );
}

export default App;
