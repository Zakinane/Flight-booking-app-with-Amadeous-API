import "./App.css";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
import Account from "./pages/Account";
import Flight from "./pages/Flight";
import Confirmation from "./pages/Confirmation";

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [history, setHistory] = useState([]);

  const addToHistory = (flight) => {
    setHistory((prev) => [...prev, flight]);
  };  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/account" element={<Account history={history} />} />
            <Route
              path="/flight/:id"
              element={<Flight addToHistory={addToHistory} />}
            />
            <Route path="/confirmation" element={<Confirmation />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
