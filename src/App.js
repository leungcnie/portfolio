import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Route exact route="/" component={Welcome}>
            <Welcome />
          </Route>
          <Route exact route="/about" component={About}>
            <About />
          </Route>
          <Route exact route="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route exact route="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route exact route="*" component={NotFound}>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
