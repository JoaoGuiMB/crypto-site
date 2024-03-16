import "./App.css";
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
    </ThemeProvider>
  );
}

export default App;
