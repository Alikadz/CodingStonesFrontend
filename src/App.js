import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./style/Global";
import Routing from "./Routing";
import Layout from "./components/common/UI/Layout";


function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Layout />
          <Routing />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
