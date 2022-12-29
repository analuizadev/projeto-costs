import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/pages/Home';
import Contact from './componentes/pages/Contact';
import NewProject from './componentes/pages/NewProject';
import Company from './componentes/pages/Company';
import Projects from './componentes/pages/Projects';
import Project from './componentes/pages/Project';

import Container from './componentes/layout/Container';
import NavBar from './componentes/layout/NavBar';
import Footer from './componentes/layout/Footer';

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
