import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Pages
import Welcome from './pages/Welcome';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome}>
            <Welcome />
          </Route>
          <Route exact path="/about" component={About}>
            <About />
          </Route>
          <Route exact path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route exact path="*" component={NotFound}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
