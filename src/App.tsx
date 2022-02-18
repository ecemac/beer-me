import React from "react";
import { Provider } from "react-redux";
import generateStore from "./store";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { RandomBeers } from "./components/RandomBeers";
import { SearchBeers } from "./components/SearchBeers";
import { Emoji } from "./components/Emojis";

const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <Grid container justifyContent="center" alignItems="center" p={2}>
        <Typography variant="h2" mb={2}>
          BEER ME <Emoji symbol="🍺" label="beer" />
        </Typography>
        <RandomBeers />
        <SearchBeers />
      </Grid>
    </Provider>
  );
}

export default App;
