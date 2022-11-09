import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
    </Provider>
  );
}

export default App;
