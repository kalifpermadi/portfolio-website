import { Navbar } from "./components/navbar";
import { AnimationRoutes } from "./components/animation/AnimationRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <main className="h-[100dvh] bg-primary">
      <BrowserRouter>
        <Navbar />
        <AnimationRoutes />
      </BrowserRouter>
    </main>
  );
}
export default App;
