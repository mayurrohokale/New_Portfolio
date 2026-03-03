import { lazy, Suspense } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layout";
import { ThemeProvider } from "./context/ThemeContext";

const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects"));
const Contact = lazy(() => import("./Pages/Contact"));
const Building = lazy(() => import("./Pages/Building"));

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/building" element={<Building />} />
          </Routes>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
