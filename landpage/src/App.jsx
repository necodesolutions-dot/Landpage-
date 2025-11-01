import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/header/footer/Footer";
import {Home} from "./pages/equipe/home/Home";
import {Equipe} from "./pages/equipe/Equipe"
import {Servicos} from "./pages/equipe/servicos/Servicos";
import "./global.css";

export function App() {
  console.log(App)
  return (
    <Router>
      <Header />

      <main className="app">

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe/>} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
