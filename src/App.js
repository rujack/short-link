import "./App.css";
import { Provider } from "react-redux";
import store from "./config/Redux/store";
import Home from "./home";

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
};

export default App;
