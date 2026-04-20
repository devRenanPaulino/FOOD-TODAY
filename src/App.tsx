import { Routes, Route } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"

import Home from "./pages/Home/Index"

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} /> 
      </Route>
    </Routes>
  );
};

export default App;