import { Grid, Typography } from '@material-ui/core';

function HomePage() {

    return (
        <Grid>

            <Grid item >
                <Typography align="center" variant="h1">
                    React Sandbox
                </Typography>
            </Grid>

            <Grid item>
                <Typography align="right" variant="h6">
                    from Geovation
                </Typography>

            </Grid>

            <Grid item>
                <Typography align="center" variant="h5">
                    A project to showcase what's possible in React.
                </Typography>

            </Grid>
        </Grid>



    );

}

export default HomePage;