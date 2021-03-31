import React, { Component } from "react";
// import logo from './logo.png';
import "./App.css";
import { Header } from "./components/Header";
import AddTask from "./components/AddTask";
import MyTasks from "./components/MyTasks";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import FormDialog from "./components/Modal";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      //current items
      currentTaskName: "",
      date: "",
      highPriority: "Low",
      location: "",
      time: "",
      notes: "",

      //all tasks
      allTasks: [
        // {
        //   name: "Complete Transition papers",
        //   priority: "Low",
        //   notes: "do it ASAP",
        // },
        // {
        //   name: "Send email to Dr. Long",
        //   priority: "Low",
        //   notes: "do it ASAP",
        // },
        // {
        //   name: "Study for Cs 320",
        //   priority: "High",
        //   notes: "do it ASAP",
        //   location: "Kauke Hall",
        // },
      ],
      // taskObject: {
      //   date: "",
      //   priority: "",
      //   location: "",
      //   time: ""
      // },

      //modal
      modalIsOpen: false,
      infoBoxIsOpen: false,
    };

    this.handleClickOpen = () => {
      this.setState({
        currentTaskName: "",
        date: "",
        notes: "",
        location: "",
        highPriority: "Low",
      });
      this.setState({ modalIsOpen: true });
      this.state.modalIsOpen = true;
      console.log(this.state.modalIsOpen);
    };
    this.openInfoBox = () => {
      this.setState({ infoBoxIsOpen: true });
    };

    this.closeInfoBox = () => {
      this.setState({ infoBoxIsOpen: false });
    };

    this.handleClose = (e) => {
      // e.preventDefault();

      this.state.allTasks.push({
        name: this.state.currentTaskName,
        priority: this.state.highPriority,
        date: this.state.date,
        notes: `${this.state.notes}`,
        location: this.state.location,
      });
      this.setState({ modalIsOpen: false });
      this.state.modalIsOpen = false;
      console.log(this.state.allTasks);
    };

    this.closeButDoNothing = () => {
      this.setState({ modalIsOpen: false });
    };

    this.removeTask = (e) => {
      if (
        e.target.outerHTML ===
        `<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>`
      ) {
        console.log("remove the task");
        console.log(e.target);
        let toRemove =
          e.target.parentElement.parentElement.parentElement.lastChild
            .previousSibling.firstChild.innerHTML;

        this.state.allTasks.find((o, i) => {
          if (o.name === toRemove) {
            console.log(`${toRemove} will be removed`);
            let allTasks = [...this.state.allTasks];
            let removedItem = { ...allTasks[i] };
            removedItem = {};
            allTasks[i] = removedItem;
            this.setState({ allTasks });
            return true;
          }
          // obj();

          console.log(
            e.target.parentElement.parentElement.parentElement.parentElement.remove()
          );
        });
      }
    };

    this.crossoutTask = (e) => {
      let strikeOutText =
        e.target.parentElement.parentElement.parentElement.parentElement
          .lastChild.previousSibling.firstChild.firstChild.firstChild
          .firstChild;
      console.log(strikeOutText.firstChild.outerHTML);
      // console.log(strikeOutText.firstChild.innerHTML)
      // {strikeOutText.firstchild ? console.log("strike Through") : console.log("dont strike through")}
      let property = "textDecoration";
      if (strikeOutText.style[property] === ``) {
        strikeOutText.style[property] = `line-through`;
      } else {
        strikeOutText.style[property] = ``;
      }
    };

    this.captureTaskName = (e) => {
      let currentTask = e.target.value;
      console.log(currentTask);
      this.setState({ currentTaskName: currentTask });
    };
    this.capturePriority = (e) => {
      let priority = e.target.value;
      console.log(priority);
      this.setState({ highPriority: priority });
    };
    // this.captureDate = (e) => {
    //   let date = e.target.value
    //   this.setState({date: date})
    // }
    this.captureNotes = (e) => {
      let notes = e.target.value;
      console.log(notes);

      //console.log(note)
      this.setState({ notes: notes });
    };
    this.captureDate = (e) => {
      let date = e.target.value;
      console.log(date);
      //console.log(note)
      this.setState({ date: date });
    };
    this.captureLocation = (e) => {
      let location = e.target.value;
      //console.log(note)
      this.setState({ location: location });
    };
    this.clearAllTasks = () => {
      if (window.confirm("Are you sure you want to remove all tasks?")) {
        this.setState({ allTasks: [] });
      }
    };
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <div>
          <div
            className="row p-0 m-0 mt-1 pt-3"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div className="col-6 ml-5 pl-5">
              <AddTask
                whenOpened={this.handleClickOpen}
                modalIsOpen={this.state.modalIsOpen}
                whenClosed={this.handleClose}
                captureTaskName={this.captureTaskName}
                captureNotes={this.captureNotes}
                capturePriority={this.capturePriority}
                captureDate={this.captureDate}
                captureLocation={this.captureLocation}
                closeButDoNothing={this.closeButDoNothing}
                taskName={this.state.currentTaskName}
              />
            </div>
            <div
              className="col-3 pr-1"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div
                className="btn btn-sm btn-danger"
                onClick={this.clearAllTasks}
              >
                Clear Tasks
              </div>
            </div>
          </div>
        </div>

        <div className=" pl-2 mt-4">
          <MyTasks
            allTasks={this.state.allTasks}
            removeTask={this.removeTask}
            whenOpened={this.openInfoBox}
            modalIsOpen={this.state.infoBoxIsOpen}
            whenClosed={this.closeInfoBox}
            crossoutTask={this.crossoutTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
