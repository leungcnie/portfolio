import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const AppWrapper = styled.div`
  text-align: center;
  font-family: 'Concert One', sans-serif;
`;


function App() {
  return (
    <AppWrapper>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/portfolio" component={Home}>
            <Home />
          </Route>
          <Route exact path="/portfolio/about" component={About}>
            <About />
          </Route>
          <Route exact path="/portfolio/projects" component={Projects}>
            <Projects />
          </Route>
          <Route exact path="/portfolio/contact" component={Contact}>
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
