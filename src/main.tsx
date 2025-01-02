import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n";

import App from "./App.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
