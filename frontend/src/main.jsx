import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./globalStyles/dimensions.css";
import "./globalStyles/colortheme.css";
import "./globalStyles/antd_modifications.css";
import App from "./App";
import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LanguageProvider from "./contexts/LanguageContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>
);
