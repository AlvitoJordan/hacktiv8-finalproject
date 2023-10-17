import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import IndonesiaNews from "./pages/Indonesia";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<IndonesiaNews />} />
      </Routes>
  );
};
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
