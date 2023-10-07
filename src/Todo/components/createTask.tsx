import { Grid } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

export const CreateTask = () => {
  return (
    <>
      <Grid
        item
        xs={2}
        sx={{
          backgroundColor: "primary.main",
          padding: 2,
          borderRadius: "8px",
        }}
      >
        <Grid container direction="row" justifyContent="center">
          <AddCircleRoundedIcon sx={{ fontSize: 100, color: "white" }} />
        </Grid>
      </Grid>
    </>
  );
};
