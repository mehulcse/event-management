import React, { useState, useContext, Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginContainer from "../Shared/LoginContainer";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  orSeparator: {
    padding: theme.spacing(0, 2),
    background: theme.palette.common.white,
    position: "relative",
    top: "-11px"
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Fragment>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className={classes.submit}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </Fragment>
          <Fragment>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              className={classes.submit}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submit}
              onClick={() => {
              }}
            >
              Login
            </Button>
          </Fragment>
        </form>
      </>
    </LoginContainer>
  );
}
