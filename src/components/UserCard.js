import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ModalForm from "./ModalForm";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  deleteUser(item) {
    this.props.removeUser(item);
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { name, surname, birthday, gender, student, id } = this.props;
    return (
      <div
        className="user-card"
        style={{
          margin: "5px 0",
          padding: "20px",
          boxShadow:
            "0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12)"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                lineHeight: "1.35417em",
                margin: 0
              }}
            >
              Name: {name}
            </h1>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                lineHeight: "1.35417em",
                margin: 0
              }}
            >
              Surname: {surname}
            </h1>
            {gender.length !== 0 ? (
              <p style={{ margin: 0 }}>Gender: {gender}</p>
            ) : null}
            {student.length !== 0 ? (
              <p style={{ margin: 0 }}>Student: {student}</p>
            ) : null}
            {birthday && birthday.length !== 0 ? (
              <p style={{ margin: 0 }}>Birthday: {birthday}</p>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              flexGrow: 0,
              flexBasis: "16.66667%"
            }}
          >
            <Button
              variant="fab"
              color="secondary"
              aria-label="Edit"
              className="edit"
              style={{ backgroundColor: "#009688" }}
              onClick={this.handleOpen}
            >
              <EditIcon />
            </Button>
            <ModalForm
              id={id}
              name={name}
              surname={surname}
              gender={gender}
              birthday={birthday}
              student={student}
              openModal={this.state.open}
              closeModal={this.handleClose}
            />
            <Button
              variant="fab"
              aria-label="Delete"
              className="delete"
              style={{ backgroundColor: "#FF5722" }}
              onClick={() => {
                this.props.removeUser(this.props.id);
              }}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
