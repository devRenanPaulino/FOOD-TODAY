import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./contexts/RecipeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>,
);
