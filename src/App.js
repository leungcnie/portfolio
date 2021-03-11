// import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.tangerineYellow};
`;


function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
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
    </AppWrapper>
  );
}

export default App;
