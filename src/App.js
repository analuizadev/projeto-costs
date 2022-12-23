import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componetes/pages/Home';
import Contact from './componetes/pages/Contact';
import NewProject from './componetes/pages/NewProject';
import Company from './componetes/pages/Company';
import Projects from './componetes/pages/Projects';

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
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/company" element={<Company />}>  </Route>
            <Route exact path="/projects" element={<Projects />}> </Route>
            <Route exact path="/newproject" element={<NewProject />}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
