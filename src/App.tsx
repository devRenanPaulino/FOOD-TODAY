import { Routes, Route } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";

import Home from "./pages/Home/index";
import Menu from "./pages/Menu/Index";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
};

export default App;
