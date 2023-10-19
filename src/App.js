import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Route, Routes } from "react-router-dom";
import IndonesiaNews from "./pages/Indonesia";
import CovidNews from "./pages/Covid";
import ProgrammingNews from "./pages/Programming";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/covid" element={<CovidNews />} />
        <Route path="/programming" element={<ProgrammingNews />} />
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
