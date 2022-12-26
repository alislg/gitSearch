import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="flex flex-col justify-between h-screen">
          <Navbar></Navbar>
          <main className="px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
