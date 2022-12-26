import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componetes/pages/Home';
import Contact from './componetes/pages/Contact';
import NewProject from './componetes/pages/NewProject';
import Company from './componetes/pages/Company';
import Projects from './componetes/pages/Projects';
import Project from './componetes/pages/Project';

import Container from './componetes/layout/Container';
import NavBar from './componetes/layout/NavBar';
import Footer from './componetes/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/company" element={<Company />}>  </Route>
            <Route path="/projects" element={<Projects />}> </Route>
            <Route path="/newproject" element={<NewProject />}> </Route>
            <Route path="/project/:id" element={<Project />}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
