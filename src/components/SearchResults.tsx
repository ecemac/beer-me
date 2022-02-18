import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { IBeerResponse } from "../types";

const CustomCard = styled(Card)(({ theme }) => ({
  padding: 10,
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    maxWidth: "70%",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
  },
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
}));

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  alignItems: "center",
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  maxWidth: "60%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const CustomTypography = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));

const customStyles = {
  image: {
    maxWidth: 20,
    maxHeight: 100,
  },
};

export const SearchResults: React.FC<{ data: IBeerResponse[] }> = ({
  data,
}) => {
  return (
    <>
      {data.map((d) => (
        <CustomCard key={d.id} raised>
          <CustomBox>
            <CardMedia
              component="img"
              image={
                d.image_url ??
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
              }
              alt={d.name}
              sx={customStyles.image}
            />
            <CardHeader subheader={d.name} />
          </CustomBox>

          <CustomCardContent>
            <CustomTypography variant="body2" color="text.secondary">
              {d.description}
            </CustomTypography>
          </CustomCardContent>
        </CustomCard>
      ))}
    </>
  );
};
