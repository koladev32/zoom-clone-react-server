import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App() {
return (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <div>
        Welcome
      </div>
    </PersistGate>
  </Provider>
);
}

export default App;