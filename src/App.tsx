import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";

import Home from "./pages/Home/index";
import Menu from "./pages/Menu/Index";
import Contact from "./pages/Contact/Index";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
