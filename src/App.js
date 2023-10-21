import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/molecules";
import { CovidNews, IndonesiaNews, ProgrammingNews, SavedNews, SearchNews } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndonesiaNews />} />
        <Route path="/covid" element={<CovidNews />} />
        <Route path="/programming" element={<ProgrammingNews />} />
        <Route path="/saved" element={<SavedNews />} />
        <Route path="/search/:searchValue" element={<SearchNews />} />
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
