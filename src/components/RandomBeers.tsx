import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import { getRandomBeersAction, getRandomNABeersAction } from "../store/actions";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { Error } from "./Error";
import { styled } from "@mui/material/styles";

const CustomCard = styled(Card)(({ theme }) => ({
  padding: 10,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const customStyles = {
  items: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "15%",
  },
};

export const RandomBeers = () => {
  const dispatch = useDispatch();
  const { data, type, loading, error } = useAppSelector(
    (state) => state.randomBeer
  );

  const getRandomBeer = () => {
    dispatch(getRandomBeersAction());
  };

  const getRandomNABeer = () => {
    dispatch(getRandomNABeersAction());
  };

  useEffect(() => {
    getRandomBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data && (!data.name || !data.description)) {
      type === "Alcoholic" ? getRandomBeer() : getRandomNABeer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Grid item xs={12}>
      <CustomCard raised>
        {!loading && data && data?.name && data?.description && (
          <>
            <Box sx={customStyles.items}>
              <CardHeader title={data.name} subheader={data.tagline} />
              <CardMedia
                component="img"
                sx={customStyles.image}
                image={
                  data.image_url ??
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                }
                alt={data.name}
              />
            </Box>

            <CustomCardContent>
              <Typography
                variant="body2"
                color="text.primary"
                textAlign="justify"
                mb={2}
              >
                Type: {type}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                textAlign="justify"
                mb={2}
              >
                {data.description} First brewed in {data.first_brewed}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
                mb={2}
              >
                Brewer Tips: {data.brewers_tips}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                Food Pairing:{" "}
                {data.food_pairing?.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </Typography>
            </CustomCardContent>
            <CardActions sx={customStyles.items}>
              <Stack spacing={4}>
                <Button variant="outlined" onClick={getRandomBeer}>
                  Random Beer
                </Button>
                <Button variant="outlined" onClick={getRandomNABeer}>
                  Random Non-Alcoholic Beer
                </Button>
              </Stack>
            </CardActions>
          </>
        )}
        {loading && <CircularProgress />}
      </CustomCard>
      {error && <Error />}
    </Grid>
  );
};
