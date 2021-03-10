import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact route="/" component={Welcome}>
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
