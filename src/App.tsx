import "./App.css";
import Header from "./components/layouts/header";
import Overview from "./pages/overview";

function App() {
  return (
    <div className="bg-gray-700">
      <Header />
      <Overview/>
    </div>
  );
}

export default App;
