import React from "react";

import { Grid, Paper } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";

const animatedComponents = makeAnimated();

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    padding: theme.spacing(4),
    width: "60vw"
  },
  custom_grid_item: {
    padding: theme.spacing(2)
  }
}));

function FormPage() {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const [radioGroupValue, setRadioGroupValue] = React.useState("Home");

  const radioHandleChange = (event) => {
    setRadioGroupValue(event.target.value);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    axios.post("https://usebasin.com/f/b349af0a775b", { data }).then((res) => {
      console.log(res);
    });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper>
        <form
          id="form"
          className={classes.root}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item container className={classes.custom_grid_item}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="firstName"
                  label="First name"
                  color="primary"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item container className={classes.custom_grid_item}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="lastName"
                  label="Last name"
                  color="primary"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid
            item
            container
            md={12}
            spacing={3}
            justifyContent="space-between"
            className={classes.custom_grid_item}
          >
            <Grid item container md={5}>
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item container md={5}>
              <Controller
                name="workdays"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    id="workdays"
                    label="Preferred workdays"
                    type="number"
                    fullWidth
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={12}
            spacing={3}
            justifyContent="space-between"
            className={classes.custom_grid_item}
          >
            <Grid item container md={5}>
              <div>
                <FormLabel component="legend">Which OS did you use?</FormLabel>
                <br />
                <Controller
                  name="os"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={[
                        { value: "linux", label: "Linux" },
                        { value: "macOS", label: "MacOS" },
                        { value: "windows", label: "Windows" },
                        { value: "android", label: "Android" },
                        { value: "ios", label: "iOS" }
                      ]}
                    />
                  )}
                />
              </div>
            </Grid>
            <Grid item container md={5}>
              <Controller
                name="base_station"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Base Station?</FormLabel>
                    <RadioGroup
                      aria-label="base_station"
                      name="base_station"
                      value={radioGroupValue}
                      onChange={radioHandleChange}
                      {...field}
                    >
                      <FormControlLabel
                        value="Home"
                        control={<Radio />}
                        label="Home"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="Office"
                        control={<Radio />}
                        label="Office"
                        labelPlacement="start"
                      />
                      <FormControlLabel
                        value="Field"
                        control={<Radio />}
                        label="Field"
                        labelPlacement="start"
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />
            </Grid>
          </Grid>
          <br />
          <Grid
            item
            container
            md={12}
            justifyContent="center"
            className={classes.custom_grid_item}
          >
            <Controller
              name="linkedInURL"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="linkedInURL"
                  label="LinkedIn"
                  type="url"
                  fullWidth
                  {...field}
                />
              )}
            />
          </Grid>
          <br />
          <Grid item className={classes.custom_grid_item}>
            <Button
              type="submit"
              form="form"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default FormPage;
