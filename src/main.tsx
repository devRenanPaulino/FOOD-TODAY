import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./contexts/RecipeProvider.tsx";
import ScrollToTop from "./components/utils/scrollToTop.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>,
);
