import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Layout";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
