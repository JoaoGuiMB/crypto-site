import "./App.css";
import { ThemeProvider } from "@/context/theme-provider";
import Layout from "./components/layout";
import Routings from "./components/router/Routings";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Layout>
          <Routings />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
