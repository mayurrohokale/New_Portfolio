import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layout";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
