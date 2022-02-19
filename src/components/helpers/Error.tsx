import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomStack = styled(Stack)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
}));

export const Error = () => {
  return (
    <CustomStack sx={{ width: "100%" }} spacing={2}>
      <Alert
        severity="error"
        action={
          <Button
            color="inherit"
            size="small"
            onClick={() => window.location.reload()}
          >
            TRY AGAIN
          </Button>
        }
      >
        Oops, something went wrong!
      </Alert>
    </CustomStack>
  );
};
