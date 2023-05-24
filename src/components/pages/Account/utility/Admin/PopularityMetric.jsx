import Grid from "@mui/material/Grid";

function PopularityMetric(props) {
  // shows says per month

  return (
    <>
      <Grid
        container
        height={0.92}
        width={1}
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          width={0.8}
          height={0.8}
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            flexDirection="column"
            xs
            justifyContent="space-evenly"
            height={1}
          >
            <Grid item fontSize="30px">
              Most popular product
            </Grid>
            <Grid item fontSize="24px" fontStyle="italic">
              Handmade{" "}
              {props.analysisData.popularity_metric[0].most_popular.name}
            </Grid>
            <Grid item>
              <img
                src={
                  props.analysisData.popularity_metric[0].most_popular.image_url
                }
                alt={props.analysisData.popularity_metric[0].most_popular.name}
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "20px",
                }}
              />
            </Grid>
            <Grid item fontSize="24px">
              How many bought so far
            </Grid>
            <Grid item fontSize="20px">
              {props.analysisData.popularity_metric[0].occurance}
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection="column"
            xs
            justifyContent="space-evenly"
            height={1}
          >
            <Grid item fontSize="30px">
              Least popular product
            </Grid>
            <Grid item fontSize="24px" fontStyle="italic">
              Handmade{" "}
              {props.analysisData.popularity_metric[1].least_popular.name}
            </Grid>
            <Grid item>
              <img
                src={
                  props.analysisData.popularity_metric[1].least_popular
                    .image_url
                }
                alt={props.analysisData.popularity_metric[1].least_popular.name}
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "20px",
                }}
              />
            </Grid>
            <Grid item fontSize="24px">
              How many bought so far
            </Grid>
            <Grid item fontSize="20px">
              {props.analysisData.popularity_metric[1].occurance}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PopularityMetric;
