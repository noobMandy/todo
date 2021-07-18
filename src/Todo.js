import {
  ListItemText,
  ListItem,
  List,
  ListItemAvatar,
  Button,
  Modal,
  Input,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginTop: "20%",
    marginLeft: "40%",
    marginRight: "40%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = (event) => {
    event.preventDefault();
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <form>
            <CloseIcon className="closeIcon" onClick={handleClose} />
            <h1>Edit Todo✏️</h1>
            <Input
              placeholder={props.todo.todo}
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" onClick={updateTodo}>
              Update Todo
            </Button>
          </form>
        </div>
      </Modal>

      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy DeadLine ⏰!!"
          />
          <div className="deleteEditIcon">
            <DeleteIcon
              className="deleteIcon"
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            />

            <EditIcon onClick={(e) => setOpen(true)} />
          </div>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
