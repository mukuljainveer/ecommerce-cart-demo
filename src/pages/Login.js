import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import * as Yup from "yup";

const useStyles = makeStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "white", // or black
    },
  },
  underline: {
    "&::after": {
      borderBottom: "2px solid #ffffff40 !important",
    },
    "&::before": {
      borderBottom: "2px solid #ffffff40 !important",
    },
  },
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().max(8).required("Required"),
});

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();

  let { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        email: "mukuljainveer11@gmail.com",
        password: "Test@123",
      },
      validationSchema: loginSchema,
      onSubmit: () => {
        login();
      },
    });

  const login = () => {
    navigate("/home");
  };

  return (
    <DefaultLayout>
      <Box display="flex" justifyContent="center">
        <Box
          mt={10}
          padding="60px 40px"
          style={{
            width: "50%",
            borderRadius: "5px",
            backgroundColor: "#3F3F3F",
            color: "white",
          }}
        >
          <Grid spacing={2} container>
            <Grid textAlign="center" item xs={12}>
              Login
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                inputProps={{ style: { color: "white" } }}
                fullWidth
                label="Email"
                variant="standard"
                placeholder="Email"
                className={classes.root}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                    root: classes.inputRoot,
                  },
                }}

                // InputProps={{
                //   classes: { input: classes.input },
                // }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                name="password"
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                label="Password"
                inputProps={{ style: { color: "white" } }}
                fullWidth
                variant="standard"
                placeholder="Password"
                className={classes.root}
                InputProps={{
                  classes: {
                    underline: classes.underline,
                    root: classes.inputRoot,
                  },
                }}
              />
            </Grid>
            <Grid textAlign="center" item xs={12}>
              <Button onClick={handleSubmit} variant="contained">
                Go
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DefaultLayout>
  );
}

export default Login;
