import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import AppToolbar from "./AppToolbar";
import { AddUser } from "../actions/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import toastr from "toastr";

const styles = {
  form: {
    width: "100%",
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  createMainInfo: {
    margin: "20px 0"
  },
  name: {
    maxWidth: "50%"
  },
  surame: {
    marginTop: "16px",
    maxWidth: "50%"
  },
  buttonSecondary: {
    color: "#000",
    backgroundColor: "#FF5722"
  },
  buttonPrimary: {
    color: "#fff",
    backgroundColor: "#009688",
    float: "right"
  }
};
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: guid(),
        name: "",
        surname: "",
        birthday: "",
        gender: "",
        student: ""
      },

      errors: {
        errorName: "",
        errorSurname: ""
      }
    };
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  handleChange = e => {
    if (e.target.name === "name") {
      this.setState({
        errors: { ...this.state.errors, errorName: "" }
      });
    } else if (e.target.name === "surname") {
      this.setState({
        errors: { ...this.state.errors, errorSurname: "" }
      });
    }
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.user.name;
    const surname = this.state.user.surname;
    if (name === "") {
      this.setState({
        errors: { ...this.state.errors, errorName: "errorName" }
      });
    } else if (surname === "") {
      this.setState({
        errors: { ...this.state.errors, errorSurname: "errorSurName" }
      });
    } else {
      this.props.AddUser(this.state.user);
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "100",
        hideDuration: "100",
        timeOut: "2000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "show",
        hideMethod: "hide"
      };
      toastr.success("User was created");
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppToolbar showHomeIcon />
        <FormControl component="fieldset" className={classes.form}>
          <div style={{ padding: "14px 24px 24px" }}>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                margin: 0,
                fontFamily: "Roboto, Helvetica, Arial,sans-serif"
              }}
            >
              {" "}
              Create new user
            </h1>
            <div className={classes.createMainInfo}>
              <div>
                <TextField
                  name="name"
                  id="with-placeholder"
                  label="Name"
                  required
                  helperText={
                    this.state.errors.errorName === ""
                      ? ""
                      : "This field is required"
                  }
                  error={
                    this.state.errors.errorName.length === 0 ? false : true
                  }
                  placeholder="Name"
                  className={classes.name}
                  margin="normal"
                  fullWidth
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <TextField
                  name="surname"
                  id="with-placeholder"
                  label="Surname"
                  required
                  placeholder="Surname"
                  className={classes.surame}
                  margin="normal"
                  fullWidth
                  helperText={
                    this.state.errors.errorSurname === ""
                      ? ""
                      : "This field is required"
                  }
                  error={
                    this.state.errors.errorSurname.length === 0 ? false : true
                  }
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <FormControl component="fieldset" className="Gender" required>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  className="Gender Group"
                  value={this.state.user.gender}
                  onChange={this.handleChange}
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{ margin: "0 0 20px" }}>
              <TextField
                name="birthday"
                id="date"
                label="Birthday"
                type="date"
                className="birthday"
                InputLabelProps={{
                  shrink: true
                }}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <FormControl component="fieldset" className="Student" required>
                <FormLabel component="legend">Student</FormLabel>
                <RadioGroup
                  aria-label="Student"
                  name="student"
                  className="Student"
                  value={this.state.user.student}
                  onChange={this.handleChange}
                  row
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="no" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="Buttons" style={{ margin: -12 }}>
              <Button
                className={classes.buttonSecondary}
                variant="contained"
                color="secondary"
                onClick={() => this.nextPath("/")}
                // style={{ color: "#000", backgroundColor: "#FF5722" }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className={classes.buttonPrimary}
                color="primary"
                onClick={e => this.handleSubmit(e)}
              >
                Create User
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { AddUser }
  )(withStyles(styles)(Form))
);
