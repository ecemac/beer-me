import React from "react";
import { Provider } from "react-redux";
import generateStore from "./store";
import { RandomBeers } from "./components/RandomBeers";

const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <RandomBeers />
    </Provider>
  );
}

export default App;
