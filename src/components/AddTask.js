import { Modal } from "@material-ui/core";
import React, { Component } from "react";
import { MyModal } from "./Modal";

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <div>
        <MyModal
          handleClickOpen={this.props.whenOpened}
          modalIsOpen={this.props.modalIsOpen}
          handleClose={this.props.whenClosed}
          captureTaskName={this.props.captureTaskName}
          capturePriority={this.props.capturePriority}
          captureNotes={this.props.captureNotes}
          captureDate={this.props.captureDate}
          captureLocation={this.props.captureLocation}
          closeButDoNothing={this.props.closeButDoNothing}
          taskName={this.props.taskName}
        />
      </div>
    );
  }
}
