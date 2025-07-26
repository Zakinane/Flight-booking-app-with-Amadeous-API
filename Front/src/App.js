import "./App.css";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
import Account from "./pages/Account";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
