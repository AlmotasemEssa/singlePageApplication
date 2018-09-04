import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from "react-redux";
import { SaveUsers, ShowUsers } from "../actions/action";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';

const styles = {
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
  },
  card: {
    padding: "16px 24px 24px"
  },
  dialogActions: {
    justifyContent: "space-between"
  }
};

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        name: "",
        surname: "",
        birthday: "",
        gender: "",
        student: ""
      },

      errors: {
        errorName: "",
        errorSurname: ""
      },
      scroll: "paper"
    };
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
  handleCreate(e) {
    e.preventDefault();
    const userList = this.props.users;
    const name = this.state.user.name;
    const surname = this.state.user.surname;
    if (name === "") {
      this.setState({
        errors: { ...this.state.errors, errorName: "errorName" }
      });
    }
    if (surname === "") {
      this.setState({
        errors: { ...this.state.errors, errorSurname: "errorSurName" }
      });
    } else {
      const resultUser = this.state.user;
      const resultedArray = userList.map(
        el => (el.id === resultUser.id ? resultUser : el)
      );
      this.props.SaveUsers(resultedArray);
    }
  }
  componentWillReceiveProps(nexProps) {
    const { id, name, surname, birthday, gender, student } = nexProps;

    this.setState({
      user: {
        ...this.state.user,
        id,
        name,
        surname,
        birthday,
        gender,
        student
      }
    });
  }
  render() {
    const { openModal, classes } = this.props;
    const { name, surname, birthday, gender, student } = this.state.user;
    return (
      <Dialog
        open={openModal}
        onClose={this.handleClose}
        scroll={this.state.scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <FormControl
          component="fieldset"
          className="form"
          style={{ backgroundColor: "white" }}
        >
          <Card className={classes.card}>
            <h1> Correct user information</h1>
            <div className="creae-main-info" style={{ margin: "20px 0" }}>
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
                  value={name}
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
                  value={surname}
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
                  value={gender}
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
                value={birthday}
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
                  value={student}
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
            <DialogActions className={classes.dialogActions}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.buttonSecondary}
                onClick={() => this.props.closeModal()}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonPrimary}
                onClick={e => this.handleCreate(e)}
              >
                CORRECT USER
              </Button>
            </DialogActions>
          </Card>
        </FormControl>
      </Dialog>
    );
  }
}

export default connect(
  ({ userList: { users } }) => ({
    users
  }),
  { SaveUsers, ShowUsers }
)(withStyles(styles)(ModalForm));
