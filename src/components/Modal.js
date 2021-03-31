import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Modal, TextareaAutosize } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import React, { Component } from "react";
import DatePickers from "../helperComponents/DatePicker";

export class MyModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div
          className="btn btn-block text-white mb-1"
          onClick={this.props.handleClickOpen}
          style={{ backgroundColor: "#330066" }}
        >
          Add Task
        </div>

        <Dialog
          open={this.props.modalIsOpen}
          onClose={this.props.closeButDoNothing}
          aria-labelledby="form-dialog-title"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleClose();
            }}
          >
            <div>
              <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Fill out the following to Add your task to the task list.
                </DialogContentText>
                <TextField
                  required={true}
                  error={this.props.taskName === "" ? true : false}
                  helperText="Please enter a title"
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Title"
                  fullWidth
                  onChange={this.props.captureTaskName}
                />
              </DialogContent>
              <div
                className=" pl-2 mx-3"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                {/* <DatePickers doSomething={this.props.captureDate}/> */}
                {
                  <form
                    noValidate
                    required={true}
                    onChange={this.props.captureDate}
                  >
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      fullWidth
                      // defaultValue="2020-11-24"
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                }
                <div className="row m-0 p-0 mt-3 ">
                  <div className="col-6">
                    <FormControl
                      component="fieldset"
                      onChange={this.props.capturePriority}
                    >
                      <FormLabel component="legend">Priority</FormLabel>
                      <RadioGroup defaultValue="Low">
                        <FormControlLabel
                          value="High"
                          control={<Radio />}
                          label="High"
                        />
                        <FormControlLabel
                          value="Low"
                          control={<Radio />}
                          label="Low"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-6">
                    <div>
                      <TextareaAutosize
                        id="filled-multiline-flexible"
                        label="notes"
                        rowsMin={6}
                        fullWidth
                        placeholder="Notes"
                        onChange={this.props.captureNotes}
                      />
                    </div>
                  </div>
                  <div className="mt-3"></div>
                </div>

                <div>
                  <TextField
                    className="mt-2 mb-3"
                    label="Location"
                    fullWidth="true"
                    onChange={this.props.captureLocation}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Button
                  className=""
                  onClick={this.props.closeButDoNothing}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button color="primary" type="submit" value="Submit">
                  Done
                </Button>
              </div>
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default Modal;
