import "./App.css";
import { ThemeProvider } from "@/context/theme-provider";
import Layout from "./components/layout";
import Routings from "./components/router/Routings";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routings />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
