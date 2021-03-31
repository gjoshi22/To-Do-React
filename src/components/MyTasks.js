import React, { Component } from "react";
import TaskItem from "./TaskItem";

export default class MyTasks extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.allTasks);
  }
  render() {
    return this.props.allTasks.map((item) => (
      <TaskItem
        item={item.name}
        priority={item.priority}
        date={item.date}
        notes={item.notes}
        location={item.location}
        removeTask={this.props.removeTask}
        handleClickOpen={this.props.whenOpened}
        modalIsOpen={this.props.modalIsOpen}
        handleClose={this.props.whenClosed}
        crossoutTask={this.props.crossoutTask}
      />
    ));
  }
}
