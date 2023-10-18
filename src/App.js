import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Covid, HomePages, Navbar, Programmer } from "./pages";

const Router = () => {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/programmer" element={<Programmer />} />
        <Route path="/covid" element={<Covid />} />
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
