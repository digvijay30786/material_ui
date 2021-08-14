import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function GridSame() {
  const pages = new Array(12).fill(0).map((a, i) => i + 1);

  return (
    <>
      <Grid container spacing={2}>
        {pages.map((item) => (
          <Grid xs={12} sm={6} md={4} lg={3} xl={2} item key={item}>
            <Paper>
              <Box>
                <Typography> {item}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4"> Parent</Typography>
      <Grid container spacing={4}>
        <Grid item container xs={12} sm={6}>
          <Grid item xs={12} sm={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper>2</Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper>3</Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper>4</Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
