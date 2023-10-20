import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import IndonesiaNews from "./pages/IndonesiaNews";
import CovidNews from "./pages/CovidNews";
import ProgrammingNews from "./pages/Programming";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/covid" element={<CovidNews />} />
        <Route path="/programming" element={<ProgrammingNews />} />
      </Routes>
    </BrowserRouter>
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
