import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import React from 'react';
import AboutPage from "./components/AboutPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage";
import ScrollToTop from "./components/ScrollToTop";
import NotesPage from "./components/NotesPage";
import AllNotes from "./components/AllNotes";

function App() {
  return (
    <div className="text-3xl font-bold mx-auto max-w-5xl my-10 z-0">
      <Router>
        <NavBar />
        <ScrollToTop />
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/messages" element={<NotesPage />} />
            <Route path="/allMessages" element={<AllNotes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
