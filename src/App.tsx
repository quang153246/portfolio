import "./App.css";
import Header from "./components/layouts/header";
import About from "./pages/about";
import Overview from "./pages/overview";

function App() {
  return (
    <div className="bg-gray-900/90">
      <div className="bg-grid">
        <Header />
        <Overview />
        <About />
      </div>
    </div>
  );
}

export default App;
