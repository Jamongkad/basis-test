import React from 'react';
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import {MovieApiContextProvider} from "./contexts/MovieApiContextProvider";

function App() {
  return (
    <MovieApiContextProvider>
      <Header />
      <Layout />
      <Footer />
    </MovieApiContextProvider>
  );
}

export default App;
