import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Global/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Home />
    </div>
  );
}

export default App;
