import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, reduxStore } from "./store/redux-store";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./components/Spinner";

createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
