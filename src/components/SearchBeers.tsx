import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import {
  searchBeersByNameAction,
  searchBeersByDateAction,
} from "../store/actions";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import { SearchResults } from "./SearchResults";
import CircularProgress from "@mui/material/CircularProgress";
import { Error } from "./Error";
import { styled } from "@mui/material/styles";

const VALID_CHARACTERS_REGEX = /^[\ba-z0-9\-\s]*$/;

const CustomContainerBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomFormContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const SearchBeers = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useAppSelector((state) => state.searchBeer);

  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [invalidChar, setInvalidChar] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (VALID_CHARACTERS_REGEX.test(event.target.value)) {
      setKeyword(event.target.value);
      setInvalidChar(false);
    } else {
      event.preventDefault();
      setInvalidChar(true);
    }
  };

  const handleSearch = () => {
    searchType === "name"
      ? dispatch(searchBeersByNameAction(keyword))
      : dispatch(searchBeersByDateAction(keyword));
  };

  return (
    <Grid item xs={8}>
      <CustomContainerBox>
        <CustomFormContainerBox>
          <CustomFormControl sx={{ m: 2 }} variant="outlined">
            <TextField
              id="outlined-adornment-password"
              value={keyword}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleOnChange(event)
              }
              error={invalidChar}
              helperText={invalidChar && "Incorrect entry."}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleSearch}
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Enter Beer Name"
            />
          </CustomFormControl>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="name"
              name="radio-buttons-group"
              value={searchType}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchType(event.target.value)
              }
            >
              <FormControlLabel
                value="name"
                control={<Radio />}
                label="Search by name"
              />
              <FormControlLabel
                value="date"
                control={<Radio />}
                label="Search brewed before"
              />
            </RadioGroup>
          </FormControl>
        </CustomFormContainerBox>

        {data && data.length > 0 && <SearchResults data={data} />}
        {data && data.length === 0 && (
          <Alert severity="info">What you are searching does not exist!</Alert>
        )}
        {loading && <CircularProgress />}
        {error && <Error />}
      </CustomContainerBox>
    </Grid>
  );
};
